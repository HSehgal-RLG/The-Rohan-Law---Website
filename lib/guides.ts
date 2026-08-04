export type Guide = {
  /** Anchor id — also used by the navbar links. */
  id: string;
  eyebrow: string;
  title: string;
  playlistTitle: string;
  intro: string;
  /** Short headings only — the intro carries the explanation. */
  points: string[];
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
    "To educate homebuyers — and especially first-time homebuyers — the firm has prepared informational pieces on the two most important provisions in a purchase contract: the inspection contingency and the mortgage contingency. As part of the representation, our goal is to ensure that wherever we are in the transaction, the buyer remains involved and properly educated.",
  points: ["Inspection Contingency", "Mortgage Contingency"],
  playlistId: "REPLACE_WITH_BUYERS_PLAYLIST_ID",
};

export const sellersGuide: Guide = {
  id: "sellers",
  eyebrow: "For Home Sellers",
  title: "The Seller's Guide",
  playlistTitle: "Seller's Guide",
  intro:
    "For sellers, the firm has prepared informational pieces on the three matters that most often shape a sale: the cooperating broker's compensation, the Property Condition Disclosure Statement, and the documents needed for closing. As part of the representation, our goal is to ensure that wherever we are in the transaction, the seller remains involved and properly educated.",
  points: [
    "Cooperating Broker's Compensation",
    "Property Condition Disclosure Statement",
    "Documents Needed for Closing",
  ],
  playlistId: "REPLACE_WITH_SELLERS_PLAYLIST_ID",
};
