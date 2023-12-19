import { AvatarMale1, AvatarMale2 } from "@/assets";
type Team = {
  name: string;
  role: string;
  icon: typeof import("*.svg");
};

const teams: Team[] = [
  {
    name: "Ayoola-Iluku Olamide",
    role: "Founder",
    icon: AvatarMale1,
  },
  {
    name: "Oguntunde Caleb Fiyinfoluwa",
    role: "Software developer",
    icon: AvatarMale2,
  },
];

export default teams;
