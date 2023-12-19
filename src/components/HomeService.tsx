import Image from "next/image";

import { services } from "@/data";
import { Worm, BlobLight, BlobDark } from "@/assets";

export default function HomeService() {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center">
      <Image 
        src={Worm} 
        alt="Mascot" />
      <h1 className="flex text-xl font-bold">
        <span className="underline underline-offset-4 decoration-3 decoration-emerald-500">
          Serv
        </span>
        <span>ices</span>
      </h1>
      <div className="max-w-lg flex flex-col space-y-8 px-8 md:max-w-4xl md:grid md:grid-cols-2 md:gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <div className="w-10 h-10 relative flex items-center justify-center">
              <Image
                src={index % 2 === 0 ? BlobLight : BlobDark}
                alt="list-index"
                className="w-12 h-12"
              />
              <p className="absolute">{index + 1}</p>
            </div>
            <div>
              <h1 className="text-xl font-medium">{service.name}</h1>
              <p className="text-stone-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
