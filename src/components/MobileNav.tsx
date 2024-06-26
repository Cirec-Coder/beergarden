import { useState } from "react";
import { cn } from "../lib/utils";
import { navItems } from "../constants";
import { Icons } from "./Icons";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className="sm:hidden cursor-pointer text-white"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <Icons.XMark /> : <Icons.Bars />}
      </div>
      <div
        className={cn(
          "absolute top-full w-40 bg-black bg-opacity-50 duration-700 transition-all",
          { "translate-x-0 left-0": menuOpen },
          { "-translate-x-full left-0": !menuOpen }
        )}
      >
        <ul className="px-10 py-5 space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                className="text-white hover:text-zinc-400 duration-300"
                href={item.link}
                target="_self"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="flex justify-center items-end gap-5 h-full py-8 "
          onClick={() => setMenuOpen(false)}
        >
          <a
            href="https://twitter.com/"
            target="_blank"
            className="text-white hover:text-zinc-400 duration-300"
          >
            <Icons.Twitter width={20} height={20} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="text-white hover:text-zinc-400 duration-300"
          >
            <Icons.FacebookF width={20} height={20} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="text-white hover:text-zinc-400 duration-300"
          >
            <Icons.Instagram width={20} height={20} />
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
