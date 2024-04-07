type Project = {
  name: string;
  description: string;
  illustration: string;
};

export const clientProjects: Project[] = [
  {
    name: "Solocker",
    description: `Solocker is a Solana based Liquidity Pool Token and SPL Token
    Locker. This product is used by thousands of users and we helped
    scaled to 100k DAU.`,
    illustration: "/snapshots/il_solocker.png",
  },
  {
    name: "Caspade",
    description: `Caspade is a crypto consultancy company that specialize in community management and engagement. 
    We help them design and build their crypto new blog website.`,
    illustration: "/snapshots/il_caspade.png",
  },
  {
    name: "TekFinance",
    description:
      "TekFinance is a startup that helps build a sustainable financial system on solana chain. We are working as a contract developer for the project.",
    illustration: "/snapshots/il_tekfinance.png",
  },
  {
    name: "Dehub",
    description:
      "Dehub is a decentralize entertainment DAPP. We are patnering with their software team to help improve their system to scale.",
    illustration: "/snapshots/il_dehub.png",
  },
  {
    name: "Meme AI",
    description:
      "Meme ai is telegram bot that is helps create, edit meme and also generates meme caption using AI. Meme AI has almost 10k Daily users and can handle more than 1k concurrent users.",
    illustration: "/snapshots/il_meme_ai.png",
  },
];
