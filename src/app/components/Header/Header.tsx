import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between p-6 mx-auto lg:max-w-[1440] lg:px-20 bg-black pb-24">
      <Link href="/">
        <Image
          src="/images/logo.dark.png"
          alt="logotipo fylo"
          width={80}
          height={80}
          title="logotipo fylo"
          className="object-cover w-full h-full"
        />
      </Link>
      <nav>
        <ul className="flex gap-3  text-base lg:gap-12 text-white font-bold">
          <li>
            <Link href="#">Features</Link>
          </li>
          <li>
            <Link href="#">Team</Link>
          </li>
          <li>
            <Link href="#">Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
