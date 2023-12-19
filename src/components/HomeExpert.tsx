import Image from "next/image";

import { teams } from "@/data";

export default function HomeExpert() {
  return (
    <div className="flex flex-col space-y-8 items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="flex space-x-2 text-center text-xl font-bold">
          <span>Our</span>
          <span>Expert</span>
          <span className="underline decoration-2 decoration-emerald-500">
            Team
          </span>
        </h1>
        <p className="text-stone-700">
          Meet our expert team specialize in dedicate roles leading to our
          success
        </p>
      </div>
      <div className="flex flex-nowrap space-x-4 overflow-x-scroll">
        {teams.map((team, index) => (
          <div 
						key={index} 
						className="flex flex-col items-center space-y-2">
            <div>
              <Image 
								src={team.icon} 
								alt="Team Avatar" 
								className="w-24 h-24" />
            </div>
            <div className="text-center">
              <p>{team.name}</p>
              <p className="text-sm text-stone-500">{team.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
