export type Guide = {
  /** Anchor id — also used by the navbar links. */
  id: string;
  eyebrow: string;
  title: string;
  playlistTitle: string;
  intro: string;
  points: [string, string][];
  /**
   * YouTube playlist id from the channel's playlist URL — the value after
   * `list=` in https://www.youtube.com/playlist?list=...
   * Until a real id is supplied the section renders a "coming soon" player
   * rather than a broken embed. See isConfigured() below.
   */
  playlistId: string;
  /**
   * Optional cover image for the player facade. Either a local path in
   * /public or a full https://i.ytimg.com/... thumbnail URL. When omitted the
   * facade falls back to a brand gradient.
   */
  cover?: string;
};

/** Real YouTube playlist ids start with "PL" followed by 16 or 32 chars. */
export function isConfigured(playlistId: string): boolean {
  return /^PL[\w-]{16,}$/.test(playlistId);
}

export function playlistUrl(playlistId: string): string {
  return `https://www.youtube.com/playlist?list=${playlistId}`;
}

export const buyersGuide: Guide = {
  id: "buyers",
  eyebrow: "For Home Buyers",
  title: "The Buyer's Guide",
  playlistTitle: "Buyer's Guide",
  intro:
    "For most people a home purchase is the single largest financial decision of their lives. The Buyer's Guide playlist walks through the transaction the way the firm walks clients through it — one step at a time, in plain language, from accepted offer to closing table.",
  points: [
    [
      "Contract Review & Attorney Approval",
      "What the attorney approval period actually protects, and what gets revised before you are bound.",
    ],
    [
      "Negotiating Terms",
      "How offers, counteroffers, and conditions are shaped to protect your position.",
    ],
    [
      "Inspection & Mortgage Contingencies",
      "The deadlines that matter, and what happens when a contingency cannot be met.",
    ],
    [
      "Title Insurance, Explained",
      "The difference between the lender's policy and the owner's policy, and why you want both.",
    ],
    [
      "Closing Costs & the Closing Table",
      "What you bring, what you sign, and what to expect on the day itself.",
    ],
    [
      "Buyer's Agent Representation",
      "Establishing a dedicated buyer's agent relationship so your interests are independently represented.",
    ],
  ],
  playlistId: "REPLACE_WITH_BUYERS_PLAYLIST_ID",
};

export const sellersGuide: Guide = {
  id: "sellers",
  eyebrow: "For Home Sellers",
  title: "The Seller's Guide",
  playlistTitle: "Seller's Guide",
  intro:
    "Selling carries obligations that are easy to underestimate and expensive to get wrong. The Seller's Guide playlist covers the disclosures, deadlines, and title issues that decide whether a sale closes cleanly — and what the firm handles on your behalf at each stage.",
  points: [
    [
      "Property Condition Disclosure",
      "Preparing a complete, legally compliant disclosure statement that minimizes future liability.",
    ],
    [
      "Reviewing & Countering Offers",
      "Reading an offer for more than price, and responding on terms that hold up.",
    ],
    [
      "“As-Is” Sales",
      "The distinct legal considerations of an as-is transaction, and what it does and does not shield you from.",
    ],
    [
      "Occupancy Agreements",
      "Managing the gap when your closing date and your move-out date do not align.",
    ],
    [
      "Payoffs, Liens & Clearing Title",
      "Resolving title defects early so they do not surface days before closing.",
    ],
    [
      "Net Proceeds & Timeline",
      "What actually reaches you at closing, and when to expect it.",
    ],
  ],
  playlistId: "REPLACE_WITH_SELLERS_PLAYLIST_ID",
};
