import Image from "next/image";

const Header = () => {
return (
    <header className="flex justify-between p-6">
          <Image src="/images/logo.dark.png" alt="logo" width={80} height={80} />
          <nav>
            <ul className="flex gap-3 text-sm lg:gap-12 text-white font-bold">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Sign In</a>
              </li>
            </ul>
          </nav>
        </header>
);
};

export default Header;
