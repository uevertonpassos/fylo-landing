
  import React from 'react'
  import Image from 'next/image'
  import Link from 'next/link'

  function Footer() {
    return (
      
        <footer className="p-12 bg-gray-700 text-white lg:px-8 justify-start">
          <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center lg:mt-6">
            <div className="lg:self-start lg:py-0 lg:flex lg:flex-col text-black">
              <Image
                src="/images/logo.dark.png"
                alt="logo Fylo"
                title='logo Fylo'
                width={100}
                height={100}
                className="lg:mb-5 lg:self-start"
              />
              <p className="flex text-white items-center gap-4 pt-6 lg:pt-0">
                <span>
                  <Image
                    src="/images/icon-phone.svg"
                    alt="phone"
                    title='phone'
                    width={20}
                    height={20}
                  />
                </span>
                <span>Phone:+1-543-123-4567</span>
              </p>
              <p className="flex items-center gap-4 pt-6 text-white">
                <span>
                  <Image
                    src="/images/icon-email.svg"
                    alt="phone"
                    title='phone'
                    width={20}
                    height={20}
                  />
                </span>
                <span>example@fylo.com</span>
              </p>
            </div>
            <div className="text-white middle my-10 lg:my-0 lg:align-middle lg:py-16">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="/about" title='About'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/jobs" title='Jobs'>
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/press" title='Press'>
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/blog" title='Blog'>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-white right lg:self-start lg:py-16">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="#" title='Contact Us'>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" title='Terms'>
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" title='Privacy'>
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      
    )
  }

  export default Footer
