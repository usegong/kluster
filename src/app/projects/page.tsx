import Image from "next/image";
import { clientProjects } from "@/config/projects";
import { MdArrowForward, MdForward } from "react-icons/md";

export default function ProjectPage() {
  return (
    <div className="flex-1 flex flex-col space-y-8 md:max-w-7xl md:self-center">
      <div className="px-4 md:px-16">
        <h1 className="text-4xl font-extrabold">
          Projects we previously <br className="lt-md:hidden" /> worked on
        </h1>
      </div>
      <div className="flex flex-col px-4 lt-md:space-y-8 md:grid md:grid-cols-2 md:gap-4 md:px-16">
        {clientProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col space-y-3"
          >
            <Image
              src={project.illustration}
              width={128}
              height={128}
              alt={project.name}
              className="w-full h-full border border-green-900 rounded-md"
            />
            <div className="flex flex-col space-y-2">
              <div>
                <h1 className="text-lg font-medium">{project.name}</h1>
                <p className="text-sm text-white/80">{project.description}</p>
              </div>
              <button className="self-start flex space-x-2 items-center text-green hover:opacity-80">
                <span>Learn More</span>
                <MdArrowForward className="text-lg" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
