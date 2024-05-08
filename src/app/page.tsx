import Image from "next/image";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="w-full bg-[#BFBFBF]">
      <div className="wrapper mx-auto lg:max-w-[1440] lg:px-20">
        <Header />
        <section className=" text-black top-section flex flex-col mt-24 p-6 lg:flex-row lg:p-0 lg:py-4">
          <div className="left order-2 flex flex-col gap-12 mt-6 lg:order-1 lg:px-2 lg:w-2/4 lg:mt-0">
            <h1 className="text-2xl text-center font-bold lg:text-left lg:text-4xl ">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="text-center lg:text-left">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <input
                type="text"
                className="px-8 py-3 border border-blue-900 rounded lg:border-gray-300"
                placeholder="Enter your email.."
              />
              <button className="bg-blue-700 px-8 py-3 w-[100%] text-white font-bold rounded-sm hover:bg-blue-400">
                Get Started
              </button>
            </div>
          </div>
          <div className="right order-1 lg:order-2 lg:w-2/4">
            <Image
              src="/images/illustration-1.svg"
              alt="illustration1"
              width={600}
              height={600}
            />
          </div>
        </section>

        <section className="text-black middle-section flex flex-col mt-24 lg:flex-row">
          <div className="left order-2 p-6 lg:order-1 lg:mt-16 md:mt-16 xl:mt-32">
            <div className="heading mt-24 mb-8 font-bold text-center text-sm">
              <h2 className="text-3xl">Stay productive, wherever you are</h2>
            </div>
            <p className="mb-8 text-sm">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="mb-8 text-sm">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
            <div className="flex gap-2 justify-center items-center  border-2 border-r-0 border-t-0 border-l-0 border-b-green-600 pb-2 w-fit mx-auto">
              <span className="text-green-600"> See how Fylo works</span>
              <img src="/images/icon-arrow.svg" alt="arrow" />
            </div>
            <div className="shadow-xl my-10 py-6 px-4 rounded-xl bg-white">
              <img src="/images/icon-quotes.svg" alt="quotes" className="w-5" />
              <p className="leading-7 text-sm mt-6">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className="card-footer flex gap-2 items-center mt-6">
                <img
                  src="/images/avatar-testimonial.jpg"
                  alt="avatar"
                  className="rounded-[50%] "
                />
                <div>
                  <span className="font-bold">Kyle Burton</span>
                  <p className="text-xs">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right order-1 px-6 py-24 mt-[1.6rem] lg:order-2 lg:mt-16 xl:mt-32">
            <Image
              src="/images/illustration-2.svg"
              alt="illustration2"
              width={600}
              height={600}

            />
          </div>
        </section>
        <section className="bg-[#707070] flex gap-6 flex-col p-8 items-center text-center lg:gap-12 lg:flex-row lg:py-16 lg:text-start">
          <div className="left mt-6 text-white lg:order-1 lg:w-2/4 lg:p-4">
            <h3 className="font-bold mb-6 lg:text-2xl">
              Get early access today
            </h3>
            <p>
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
          <div className="right flex flex-col gap-3 pb-6 lg:order-2 lg:p-4 lg:w-2/4">
            <input
              type="text"
              className="px-40 py-2 placeholder:text-gray-300 rounded-sm w-[100%] lg:block"
              placeholder="email@example.com"
            />
            <button className="bg-blue-600 px-4 py-2 text-white hover:bg-blue-400 lg:w-fit lg:px-8 lg:block lg:shadow-lg">
              Get Started For Free
            </button>
          </div>
        </section>
        <div>
        <Footer />
        </div>
      </div>
    </main>
  );
}
