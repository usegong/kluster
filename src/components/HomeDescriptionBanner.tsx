import Image from "next/image";

export default function HomeDescriptionBanner() {
  return (
    <div className="self-center max-w-4xl flex flex-col space-y-32 px-8">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl md:text-4xl uppercase font-extrabold xl:text-5xl">
          An <span className="text-green-500">Ecosystem</span> from
          <br />
          getting all
        </h1>
        <p className="text-white/90">
          Blockchain is the new buzzword everyone seems to be taking about.
          Brands are racing to get onto the bandwagon but how can you stand out?
          How can you create a unique product that standout?
        </p>
      </div>
      <div className="self-center">
        <Image
          src="/il_solar.svg"
          alt="Solar"
          width={512}
          height={512}
          className="md:w-xl"
        />
      </div>
    </div>
  );
}
