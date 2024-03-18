import Image from "next/image";

export default function HomeFootNote() {
  return (
    <div className="flex flex-col self-center px-8">
      <div className="max-w-xl flex flex-col space-y-8">
        <h1 className="text-2xl md:text-4xl font-extrabold uppercase">
          The future of <br /> <span className="text-green-500">internet</span>
          is <br /> decentralized
        </h1>
        <div className="flex flex-col space-y-6 text-white/90">
          <p>
            Blockchain is a big opportunity to re-imagine how we exchange value
            and interact with one another. It&apos;s transformational at scale.
          </p>
          <p>
            One world. One people. One market. One cryptocurrency. The future of
            money is here.
          </p>
        </div>
        <button className="self-start border-1 border-green-500 text-green-500 px-8 py-2 rounded-full">
          Learn More
        </button>
      </div>
      <div>
        <Image
          alt="Blob flower"
          src="/il_blob_flower.png"
          width={512}
          height={512}
        />
      </div>
    </div>
  );
}
