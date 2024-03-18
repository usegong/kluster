export default function HomeHeroSection() {
  return (
    <div className="flex flex-col md:flex-row overflow-y-hidde">
      <div className="md:min-w-2xl flex flex-col space-y-4 px-8 py-16 md:px-16">
        <h1 className="text-5xl md:text-7xl font-extrabold">
          Blockchain <br /> In <span className="text-green-500">Action</span>
        </h1>
        <p>
          Blockchain is the new buzzword everyone seem to be talking about.
          Brands are racing to get onto the bandwangon.
        </p>
        <div className="flex space-x-4 items-center">
          <button className="bg-primary px-8 py-3 rounded-full truncate">
            Join our community
          </button>
          <button className="border border-green-500 text-green-500 px-8 py-3 rounded-full truncate">
            Learn more
          </button>
        </div>
      </div>
      <video
        src="/il_blob.mp4"
        className="h-lg md:-ml-64 2xl:ml-0 md:w-4xl object-cover -z-20"
        autoPlay
        loop
      />
    </div>
  );
}
