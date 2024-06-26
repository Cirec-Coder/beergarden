import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import { navItems } from "../constants";
import { Icons } from "./Icons";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      !(
        (event.target as HTMLElement).id.startsWith("menu") ||
        (event.target as HTMLElement).parentElement?.id.startsWith("menu")
      ) &&
      ref.current &&
      !ref.current.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        id="menu-btn"
        className="sm:hidden cursor-pointer text-white"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? (
          <Icons.XMark id="menu-btn1" />
        ) : (
          <Icons.Bars id="menu-btn2" />
        )}
      </div>
      <div
        ref={ref}
        className={cn(
          "absolute top-full w-40 bg-black bg-opacity-50 duration-700 transition-all",
          { "translate-x-0 left-0": menuOpen },
          { "-translate-x-full left-0": !menuOpen }
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <ul className="px-10 py-5 space-y-2">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setMenuOpen(false)}
            >
              <a
                className="text-white hover:text-zinc-400 duration-300"
                href={item.link}
                target="_self"
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
            <Icons.Twitter
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="text-white hover:text-zinc-400 duration-300"
          >
            <Icons.FacebookF
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="text-white hover:text-zinc-400 duration-300"
          >
            <Icons.Instagram
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
