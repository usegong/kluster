"use client";
import { Disclosure } from "@headlessui/react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

import { homeFaqs } from "@/config/faq";

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
          <Disclosure
            key={index}
            as="div"
            className="w-sm md:w-2xl flex flex-col space-y-2 bg-green-950 px-4 py-4 rounded-md"
          >
            <Disclosure.Button className="flex space-x-4 items-center text-start">
              {({ open }) => (
                <>
                  <h1 className="flex-1 text-lg md:text-xl">{faq.title}</h1>
                  {open ? (
                    <FaMinusCircle className="text-2xl text-green" />
                  ) : (
                    <FaPlusCircle className="text-2xl text-green" />
                  )}
                </>
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="prose prose-white text-green-100">
              {faq.description}
            </Disclosure.Panel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
