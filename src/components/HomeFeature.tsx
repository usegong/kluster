import { features } from "@/config/features";

export default function HomeFeature() {
  return (
    <div className="flex flex-col space-y-8 px-8 md:space-y-16 md:px-16">
      <div className="self-center max-w-3xl flex flex-col space-y-2 text-2xl md:text-5xl font-bold uppercase">
        <h1>A Smarter</h1>
        <h1 className="ml:m;-8">
          way to <span className="text-green">enhance</span>
        </h1>
        <h1 className="md:ml-16">business performance</h1>
      </div>
      <div className="flex flex-col md:self-center md:grid md:grid-cols-3 md:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col md:relative md:grid md:max-w-sm"
          >
            <h1
              className="font-extrabold  text-transparent bg-clip-text bg-primary md:absolute md:-top-18 md:-left-4"
              style={{ WebkitTextStroke: "2px green", fontSize: "7em" }}
            >
              {index + 1}
            </h1>
            <div className="flex flex-col space-y-2 z-10">
              <p className="text-lg font-medium uppercase">{feature.title}</p>
              <p className="text-white/80">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
