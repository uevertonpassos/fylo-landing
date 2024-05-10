import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full bg-black overflow-x-hidden ">
      <div className="mx-auto lg:max-w-[1440] lg:px-20">
        <section className=" text-white flex flex-col p-6 lg:flex-row lg:p-0 lg:py-4">
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
                className="px-12 py-3 border border-blue-900 rounded lg:border-gray-300"
                placeholder="Enter your email.."
              />
              <button className="bg-blue-700 px-6 py-3 w-[100%] text-white font-bold rounded-sm hover:bg-blue-400">
                Get Started
              </button>
            </div>
          </div>
          <div className="right order-1 lg:order-2 lg:w-2/4">
            <Image
              src="/images/illustration-1.svg"
              alt="organização de arquivos"
              title="organização de arquivos"
              priority={true}
              width={600}
              height={600}
            />
          </div>
        </section>

        <section className=" middle-section flex flex-col mt-24 lg:flex-row">
          <div className="left order-2 p-6 lg:order-1 lg:mt-16 md:mt-16 xl:mt-32">
            <div className="heading mt-24 mb-8 font-bold text-center text-sm">
              <h2 className="text-3xl text-white">Stay productive, wherever you are</h2>
            </div>
            <p className="mb-8 text-sm text-white">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="mb-8 text-sm">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
            <div className="flex gap-2 justify-center items-center  border-2 border-r-0 border-t-0 border-l-0 border-b-green-600 pb-2 w-fit mx-auto">
              <span className="text-green-700"> See how Fylo works</span>
              <img src="/images/icon-arrow.svg" alt="arrow" />
            </div>
            <div className="shadow-xl my-10 py-6 px-4 rounded-xl bg-white">
              <Image
                src="/images/icon-quotes.svg"
                alt="quotes"
                title="quotes"
                width={25}
                height={60}
                
              />

              <p className="leading-7 text-sm mt-6 text-black">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className=" flex gap-2 items-center mt-6">
                <Image
                  src="/images/avatar-testimonial.jpg"
                  alt="profile testimonial"
                  title="profile testimonial"
                  width={100}
                  height={60}
                  className="rounded-full"
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
              alt="ilustração de produtividade"
              title="ilustração de produtividade"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
