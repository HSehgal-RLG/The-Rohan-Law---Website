import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: { ciphers: "SSLv3" },
  });

  await transporter.sendMail({
    from: `"RLG Website" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO ?? process.env.SMTP_USER,
    replyTo: `"${name}" <${email}>`,
    subject: subject ? `[RLG Contact] ${subject}` : `[RLG Contact] New inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "(none)"}\n\n${message}`,
    html: `
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
  });

  return NextResponse.json({ ok: true });
}
