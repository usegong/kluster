import Image from "next/image";

export default function HomeDescription() {
  return (
    <div className="flex flex-col lt-md:px-8 md:flex-row">
      <Image
        alt="Blob net"
        src="/il_blob_net.png"
        width={512}
        height={512}
      />
      <div className="md:w-2xl flex flex-col space-y-4">
        <div className="flex flex-col space-y-2  text-2xl md:text-4xl font-extrabold uppercase lt-md:self-center xl:text-5xl">
          <h1>The most</h1>
          <h1 className="ml-8 md:ml-16">Trusted way</h1>
          <h1 className="ml-16 md:ml-24">
            <span className="text-green-500">To build</span> value
          </h1>
        </div>
        <div className="flex flex-col space-y-8 px-2">
          <div className="flex flex-col space-y-6 text-white/90">
            <p>
              Blockchain is the new buzzword everyone seem to be talking about.
              Brands are racing to get into the bandwagon, but how can you stand
              out?
            </p>
            <p>
              We provide consultancy to small and large scale companies and
              provide solutions for different areas within the blockchain
              industry, such as Blockchain in Development, and more.
            </p>
          </div>
          <button className="self-start border-1 border-green-500 text-green-500 px-8 py-2 rounded-full">Learn More</button>
        </div>
      </div>
    </div>
  );
}
