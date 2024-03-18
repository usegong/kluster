import Image from "next/image";

export default function HomeDescriptionBanner() {
  return (
    <div className="self-center flex flex-col lt-md:space-y-32 px-8 md:flex-row md:space-x-16">
      <div className="max-w-md lg:max-w-xl flex flex-col space-y-8">
        <div className="flex flex-col space-y-2 text-2xl uppercase font-extrabold lt-md:self-center md:text-4xl xl:text-5xl">
          <h1>
            An <span className="text-green-500">Ecosystem</span>
          </h1>
          <h1 className="ml-8">of best value</h1>
          <h1 className="ml-16">and getting all</h1>
        </div>
        <div className="flex flex-col space-y-4">
          <p>
            Unlock the full potential of Blockchain with our unique approach to
            product development. Stand out from the crowd in today&apos;s competitive
            landscape by creating an ecosystem of best value.
          </p>
          <p>
            Join us in revolutionizing the way businesses harness Blockchain
            technology. Stand out. Create value. Get started today.
          </p>
        </div>
        <button className="self-start border-1 border-green-500 text-green-500 px-8 py-2 rounded-full">
          Learn More
        </button>
      </div>
      <div>
        <Image
          src="/il_solar.svg"
          alt="Solar"
          width={512}
          height={512}
        />
      </div>
    </div>
  );
}
