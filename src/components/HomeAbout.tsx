export default function HomeAbout() {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center">
      <h1 className="flex space-x-2 text-xl font-bold">
        <span className="underline underline-offset-4 decoration-3 decoration-emerald-500">
          About
        </span>
        <span>us</span>
      </h1>
      <div className="max-w-lg flex flex-col space-y-8 px-4 text-center md:max-w-2xl">
        <p className="text-stone-700">
          Create with gong build solutions for you. We build websites, mobile
          applications, custom solutions for clients. We also help our minimize
          cost and maximize profit by providing flexible solutions to run your
          business.
        </p>
        <p className="text-stone-700">
          We help ambitious businesses like yours generate more profit by
          building awareness, driving web traffic connecting with customer and
          growing overall sales.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <button className="btn-primary">View Works</button>
          <button className="btn-primary-outline">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
