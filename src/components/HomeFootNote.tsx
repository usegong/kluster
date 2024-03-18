import Image from "next/image";

export default function HomeFootNote() {
  return (
    <div className="flex flex-col self-center px-8 md:flex-row">
      <div className="lt-md:order-last">
        <Image
          alt="Blob flower"
          src="/il_blob_flower.png"
          width={512}
          height={512}
        />
      </div>
      <div className="max-w-xl flex flex-col space-y-8">
        <div className="flex flex-col space-y-2 text-2xl font-extrabold uppercase lt-md:self-center md:text-4xl">
          <h1>The future</h1>
          <h1 className="ml-8">
            of <span className="text-green-500">internet </span>
          </h1>
          <h1 className="ml-16">is decentralized</h1>
        </div>
        <div className="flex flex-col space-y-6 text-white/90">
          <p>
            Blockchain is a big opportunity to re-imagine how we exchange value
            and interact with one another. It&apos;s transformational at scale.
          </p>
          <p>
            Join the movement shaping the future of money. Embrace Blockchain.
            Embrace change. The future is now.
          </p>
        </div>
        <button className="self-start border-1 border-green-500 text-green-500 px-8 py-2 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
}
