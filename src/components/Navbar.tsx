import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { LogoLight, navItems } from "../constants";
import MobileNav from "./MobileNav";

const Navbar = () => {

  return (
    <header className="fixed flex justify-between sm:justify-around items-center z-50 top-0 left-0 w-full py-10 px-8 sm:px-0 bg-black bg-opacity-50">
      <img
        src={LogoLight}
        alt="logo"
        height={100}
        width={100}
      />
      <ul className="hidden sm:flex gap-5">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              className="text-white uppercase hover:text-zinc-400 duration-300"
              href={item.link}
              target="_self"
              >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden sm:flex gap-5">
        <a
          href="https://twitter.com/"
          target="_blank"
          className="text-white hover:text-zinc-400 duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="text-white hover:text-zinc-400 duration-300"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="text-white hover:text-zinc-400 duration-300"
        >
          <FaInstagram />
        </a>
      </div>
      <MobileNav />
    </header>
  );
};

export default Navbar;
