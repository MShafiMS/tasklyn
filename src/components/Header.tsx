import useTheme from "@TasklynAlias/hooks/useTheme";
import Link from "next/link";
import { useState } from "react";
import { BiSolidSun } from "react-icons/bi";
import { BsMoonStarsFill } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import Logo from "./Logo";

const Header = () => {
  const { changeTheme, theme } = useTheme();
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="flex justify-between py-4 px-20">
      <Link href={"/"} className="flex items-center gap-2">
        <Logo size="45" />
        <p className="text-[#161C2C] dark:text-white text-2xl font-semibold">
          Tasklyn
        </p>
      </Link>
      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={() => setIsClick(!isClick)}
          className="text-lg mr-4 dark:hover:bg-white/5 hover:bg-black/5 p-2 rounded-lg"
        >
          <span
            className={`${
              theme === "light" ? "text-[#1694dd]" : "text-black/80"
            } text-xl dark:hidden`}
          >
            <BiSolidSun />
          </span>
          <span
            className={`${
              theme === "dark" ? "text-[#55CBF1]" : "text-white/80"
            } text-xl dark:block hidden`}
          >
            <BsMoonStarsFill />
          </span>
        </button>
        <Link
          href={"/login"}
          className="dark:hover:bg-white/5 hover:bg-black/5 rounded-lg font-medium px-4 py-2"
        >
          Sign In
        </Link>
        <Link
          href={"/register"}
          className="dark:bg-white/5 bg-black/5 rounded-lg font-medium px-4 py-2"
        >
          Sign Up
        </Link>
      </div>
      {isClick && (
        <>
          <div
            onClick={() => setIsClick(false)}
            className="w-screen h-screen fixed top-0 left-0"
          />
          <div className="absolute top-20 right-56 dark:bg-[#1E293B] bg-white w-36 rounded-lg border dark:border-gray-700 text-lg font-medium">
            <button
              type="button"
              onClick={() => changeTheme("light")}
              className={`${
                theme === "light"
                  ? "dark:text-[#55CBF1] text-[#2E9CDB]"
                  : "dark:text-white/80 text-black/80"
              } flex items-center w-full gap-2 px-4 py-2 hover:dark:bg-white/10 hover:bg-[#1E293B]/10 rounded-t-lg`}
            >
              <BiSolidSun /> Light
            </button>
            <button
              type="button"
              onClick={() => changeTheme("dark")}
              className={`${
                theme === "dark"
                  ? "dark:text-[#55CBF1] text-[#2E9CDB]"
                  : "dark:text-white/80 text-black/80"
              } flex items-center w-full gap-2 px-4 py-2 hover:dark:bg-white/10 hover:bg-[#1E293B]/10`}
            >
              <BsMoonStarsFill /> Dark
            </button>
            <button
              type="button"
              onClick={() => changeTheme("system")}
              className={`${
                theme === "system"
                  ? "dark:text-[#55CBF1] text-[#2E9CDB]"
                  : "dark:text-white/80 text-black/80"
              } flex items-center w-full gap-2 px-4 py-2 hover:dark:bg-white/10 hover:bg-[#1E293B]/10 rounded-b-lg`}
            >
              <FiMonitor /> System
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
