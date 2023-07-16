import useTheme from "@TasklynAlias/hooks/useTheme";
import { navType } from "@TasklynAlias/lib/types/types";
import { getCurrentUser } from "@TasklynAlias/services/user.service";
import { Auth } from "aws-amplify";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BiCalendarAlt, BiNotepad, BiSolidSun } from "react-icons/bi";
import { BsChevronUp, BsMoonStarsFill } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { IoColorPaletteOutline, IoLogOutOutline } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { VscClose } from "react-icons/vsc";
import Logo from "./Logo";

const UserHead = ({ close }: { close?: () => void }) => {
  const { changeTheme, theme } = useTheme();
  const [isClick, setIsClick] = useState(false);
  const [user, setUser] =
    useState<Awaited<ReturnType<typeof getCurrentUser>>>();

  const router = useRouter();
  const params = router.pathname;

  const fetchUserData = async () => {
    const userData = await getCurrentUser();
    setUser(userData);
  };

  const navLinks = [
    { title: "Overview", path: "/home", icon: <MdSpaceDashboard /> },
    { title: "Board", path: "/todo", icon: <FaTasks /> },
    { title: "Notes", path: "/notes", icon: <BiNotepad /> },
    { title: "Calender", path: "/calender", icon: <BiCalendarAlt /> },
  ];

  useEffect(() => {
    fetchUserData();
  });

  return (
    <div className="relative py-6 w-80 lg:flex flex-col bg-black/5 dark:bg-white/5 min-h-screen">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2 px-4">
          <Logo size="45" />
          <p className="text-[#161C2C] dark:text-white text-2xl font-semibold">
            Tasklyn
          </p>
        </div>
        <button
          onClick={close}
          className="p-1.5 mr-3 lg:hidden bg-white/5 rounded"
        >
          <VscClose className="text-2xl" />
        </button>
      </div>
      <div className="my-6 mx-1">
        <Link
          href={"/profile"}
          className={`px-4 block py-2 mx-1 rounded-lg mb-6 bg-black/5 hover:bg-black/10 dark:bg-white/5 hover:dark:bg-white/10 ${
            params === "/profile"
              ? "dark:text-green-400 text-green-600 shadow-lg dark:shadow-green-500/40 shadow-green-500/30 duration-200"
              : ""
          }`}
        >
          <h1 className="text-xl font-medium">
            {user?.firstName} {user?.lastName}
          </h1>
          <p>{user?.email}</p>
        </Link>
        <ul className="flex flex-col gap-2">
          {navLinks.map((nav: navType, idx: number) => (
            <li key={idx}>
              <Link
                href={nav.path}
                className={`flex items-center gap-2 py-2 pl-4 hover:bg-[#161C2C]/10 dark:hover:bg-white/10 duration-100 text-lg ${
                  params === nav.path
                    ? "border-l-4 rounded-l text-[#161C2C]/90 dark:text-white/90 font-medium border-[#161C2C]/90 dark:border-white/90"
                    : "text-[#161C2C]/60 font-medium dark:text-white/60 "
                }`}
              >
                <span className="text-xl">{nav.icon}</span>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full absolute left-0 bottom-0 pb-6 px-1">
        <button
          type="button"
          onClick={() => setIsClick(!isClick)}
          className={`flex items-center justify-between py-2 px-4 hover:bg-[#161C2C]/10 dark:hover:bg-white/10 duration-100 text-lg w-full ${
            isClick && "bg-[#161C2C]/10 dark:bg-white/10"
          }`}
        >
          <div className="flex items-center gap-2">
            <IoColorPaletteOutline className="text-xl" />
            <p className="text-lg">Themes</p>
          </div>
          <BsChevronUp className={`${isClick && "rotate-180"} duration-200`} />
        </button>
        <div
          className={`flex items-center gap-3 px-4 py-4 bg-[#161C2C]/10 dark:bg-white/10 ${
            isClick ? "duration-200" : "absolute -top-5 opacity-0 z-[-1]"
          }`}
        >
          <button
            type="button"
            title="Light"
            onClick={() => changeTheme("light")}
            className={`${
              theme === "light"
                ? "dark:text-[#55CBF1] text-[#2E9CDB]"
                : "dark:text-white/80 text-black/80"
            } p-2 dark:bg-white/10 bg-[#1E293B]/10 rounded-lg`}
          >
            <BiSolidSun />
          </button>
          <button
            type="button"
            title="Dark"
            onClick={() => changeTheme("dark")}
            className={`${
              theme === "dark"
                ? "dark:text-[#55CBF1] text-[#2E9CDB]"
                : "dark:text-white/80 text-black/80"
            } p-2 dark:bg-white/10 bg-[#1E293B]/10 rounded-lg`}
          >
            <BsMoonStarsFill />
          </button>
          <button
            type="button"
            title="System"
            onClick={() => changeTheme("system")}
            className={`${
              theme === "system"
                ? "dark:text-[#55CBF1] text-[#2E9CDB]"
                : "dark:text-white/80 text-black/80"
            } p-2 dark:bg-white/10 bg-[#1E293B]/10 rounded-lg`}
          >
            <FiMonitor />
          </button>
        </div>
        <button
          className={`flex w-full items-center gap-2 py-2 px-4 hover:bg-[#161C2C]/10 dark:hover:bg-white/10 duration-100 text-lg `}
        >
          <AiOutlineSetting className="text-xl" /> Settings
        </button>
        <button
          onClick={async () => {
            try {
              await Auth.signOut();
            } catch (error) {
              console.log("error signing out: ", error);
            }
          }}
          className={`flex w-full items-center gap-2 py-2 px-4 hover:bg-[#161C2C]/10 dark:hover:bg-white/10 duration-100 text-lg `}
        >
          <IoLogOutOutline className="text-xl" /> Sign Out
        </button>
      </div>
    </div>
  );
};

export default UserHead;
