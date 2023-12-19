import { IcFacebook, IcTwitter, IcTiktok, IcInstagram } from "@/assets";

type Social = {
  name: string;
  link: string;
  icon: typeof import("*.svg");
};

const socials: Social[] = [
  {
    name: "Instagram",
    link: "",
    icon: IcInstagram,
  },
  {
    name: "Twitter",
    link: "",
    icon: IcTwitter,
  },
  {
    name: "Facebook",
    link: "",
    icon: IcFacebook,
  },
  {
    name: "TikTok",
    link: "",
    icon: IcTiktok,
  },
];

export default socials;
