import { homeFaqs } from "@/config/faq";
import { MdAddCircle } from "react-icons/md";

export default function HomeFaq() {
  return (
    <div className="self-center flex flex-col space-y-16 px-4 md:px-8">
      <div className="text-3xl font-extrabold md:text-5xl ">
        <h1 className="text-center">
          Frequently <br /> asked questions
        </h1>
      </div>
      <div className="flex flex-col space-y-4">
        {homeFaqs.map((faq, index) => (
          <div
            key={index}
            className="flex space-x-4 items-center bg-green-950 px-4 py-4 rounded-md"
          >
            <h1 className="flex-1 md:text-xl">{faq.title}</h1>
            <MdAddCircle className="text-2xl text-green" />
          </div>
        ))}
      </div>
    </div>
  );
}
