import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // Step 1 — get an access token from Microsoft
  let tokenData: { access_token?: string; error?: string; error_description?: string };
  try {
    const tokenRes = await fetch(
      `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/oauth2/v2.0/token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: process.env.AZURE_CLIENT_ID!,
          client_secret: process.env.AZURE_CLIENT_SECRET!,
          scope: "https://graph.microsoft.com/.default",
        }),
      }
    );
    tokenData = await tokenRes.json();
    if (!tokenRes.ok) {
      console.error("Token error:", tokenData);
      return NextResponse.json(
        { error: "AUTH_FAILED", detail: tokenData.error_description ?? tokenData.error },
        { status: 500 }
      );
    }
  } catch (e) {
    console.error("Token fetch threw:", e);
    return NextResponse.json({ error: "AUTH_NETWORK_ERROR" }, { status: 500 });
  }

  // Step 2 — send the email via Microsoft Graph
  try {
    const mailRes = await fetch(
      `https://graph.microsoft.com/v1.0/users/${process.env.MAIL_FROM}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            subject: subject
              ? `[RLG Contact] ${subject}`
              : `[RLG Contact] New inquiry from ${name}`,
            body: {
              contentType: "HTML",
              content: `
                <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1B2A4A">
                  <div style="background:#1B2A4A;padding:24px 32px">
                    <p style="color:#fff;margin:0;font-size:18px;font-family:Georgia,serif">The Rohan Law Group</p>
                    <p style="color:rgba(255,255,255,0.5);margin:4px 0 0;font-size:11px;font-family:Arial,sans-serif;letter-spacing:0.1em;text-transform:uppercase">New Website Inquiry</p>
                  </div>
                  <div style="padding:32px;background:#fff;border:1px solid #e5e7eb;border-top:none">
                    <table style="width:100%;border-collapse:collapse;font-family:Arial,sans-serif;font-size:13px">
                      <tr><td style="padding:6px 0;color:#6b7280;width:80px">From</td><td style="padding:6px 0;color:#1B2A4A;font-weight:600">${name}</td></tr>
                      <tr><td style="padding:6px 0;color:#6b7280">Email</td><td style="padding:6px 0"><a href="mailto:${email}" style="color:#8B1A2E">${email}</a></td></tr>
                      <tr><td style="padding:6px 0;color:#6b7280">Subject</td><td style="padding:6px 0;color:#1B2A4A">${subject || "(none)"}</td></tr>
                    </table>
                    <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0"/>
                    <p style="font-family:Arial,sans-serif;font-size:13px;color:#374151;line-height:1.6;white-space:pre-wrap">${message}</p>
                  </div>
                  <p style="font-family:Arial,sans-serif;font-size:10px;color:#9ca3af;text-align:center;padding:12px">
                    Submitted via RohanLaw.com · Replying to this email will reach the sender directly.
                  </p>
                </div>`,
            },
            toRecipients: [{ emailAddress: { address: process.env.MAIL_TO! } }],
            replyTo: [{ emailAddress: { name, address: email } }],
          },
        }),
      }
    );

    if (!mailRes.ok) {
      const errBody = await mailRes.json().catch(() => ({}));
      console.error("Mail error:", errBody);
      return NextResponse.json(
        { error: "MAIL_FAILED", detail: errBody?.error?.message ?? mailRes.status },
        { status: 500 }
      );
    }
  } catch (e) {
    console.error("Mail fetch threw:", e);
    return NextResponse.json({ error: "MAIL_NETWORK_ERROR" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
