import React from "react";

function Getacess() {
  return (
    <div>
      <section className="bg-[#707070] flex gap-6 flex-col p-8 items-center text-center lg:gap-12 lg:flex-row lg:py-16 lg:text-start mx-auto lg:max-w-[1440] lg:px-20">
        <div className=" mt-6 text-white lg:order-1 lg:w-2/4 lg:p-4">
          <h3 className="font-bold mb-6 lg:text-2xl">Get early access today</h3>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="flex flex-col gap-3 pb-6 lg:order-2 lg:p-4 lg:w-2/4">
          <input
            type="text"
            className="px-40 py-2 placeholder:text-gray-300 rounded-sm w-[100%] lg:block"
            placeholder="email@example.com"
            title="Enter Your Email"
          />
          <button
            className="bg-blue-600 px-4 py-2 text-white hover:bg-blue-400 lg:w-fit lg:px-8 lg:block lg:shadow-lg"
            title="Get Started For Free"
          >
            Get Started For Free
          </button>
        </div>
      </section>
    </div>
  );
}

export default Getacess;
