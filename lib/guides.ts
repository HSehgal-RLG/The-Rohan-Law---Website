export type GuideVideo = {
  /** YouTube video id (the value after v= in a watch URL). */
  id: string;
  /** Full video title, used for the iframe title and link tooltip. */
  title: string;
  /** Short badge shown when a heading has more than one video, e.g. "Part 1". */
  label?: string;
};

export type GuidePoint = {
  heading: string;
  videos: GuideVideo[];
};

export type Guide = {
  /** Anchor id — also used by the navbar links. */
  id: string;
  eyebrow: string;
  title: string;
  playlistTitle: string;
  intro: string;
  points: GuidePoint[];
  /** YouTube playlist id — the value after `list=` in a playlist URL. */
  playlistId: string;
  /**
   * Optional cover image for the player facade. Either a local path in
   * /public or a full https://i.ytimg.com/... thumbnail URL. When omitted the
   * facade falls back to the first video's YouTube thumbnail.
   */
  cover?: string;
};

/**
 * Guards against shipping a broken embed if a playlist id is missing or is
 * still a placeholder. Real ids are "PL" plus at least 8 more characters.
 */
export function isConfigured(playlistId: string): boolean {
  return /^PL[\w-]{8,}$/.test(playlistId);
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
  points: [
    {
      heading: "Inspection Contingency",
      videos: [
        {
          id: "YVJtge3wmsc",
          title: "What Is an Inspection Contingency? A Buyer's Guide",
        },
      ],
    },
    {
      heading: "Mortgage Contingency",
      videos: [
        {
          id: "XaGgWtQTDd0",
          title:
            "Mortgage Contingency Explained: What Home Buyers Need to Know (Part 1)",
          label: "Part 1",
        },
        {
          id: "npSLHHhIsDk",
          title:
            "Mortgage Contingency Explained: What Home Buyers Need to Know (Part 2)",
          label: "Part 2",
        },
      ],
    },
  ],
  playlistId: "PLO3L46m5-UIQ",
};

export const sellersGuide: Guide = {
  id: "sellers",
  eyebrow: "For Home Sellers",
  title: "The Seller's Guide",
  playlistTitle: "Seller's Guide",
  intro:
    "For sellers, the firm has prepared informational pieces on the three matters that most often shape a sale: the cooperating broker's compensation, the Property Condition Disclosure Statement, and the documents needed for closing. As part of the representation, our goal is to ensure that wherever we are in the transaction, the seller remains involved and properly educated.",
  points: [
    {
      heading: "Cooperating Broker's Compensation",
      videos: [
        {
          id: "K1S9NlfM06M",
          title:
            "Cooperating Broker Compensation — Selling a Home in New York's Capital Region",
        },
      ],
    },
    {
      heading: "Property Condition Disclosure Statement",
      videos: [
        {
          id: "Ip_eU0Jptfo",
          title:
            "Property Condition Disclosure Statement: What New York Sellers Must Disclose",
        },
      ],
    },
    {
      heading: "Documents Needed for Closing",
      videos: [
        {
          id: "3doNzmMC7vM",
          title: "What Documents Do You Need to Sell a House in New York?",
        },
      ],
    },
  ],
  playlistId: "PLPOWIS3Qztmg",
};
