import AuthenticatedPage from "@TasklynAlias/AuthenticatedPage";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import UserHead from "../UserHead";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const [nav, setNav] = useState(false);
  return (
    <AuthenticatedPage>
      <div className="flex">
        <div
          className={`fixed lg:relative top-0 duration-300 ${
            nav ? "left-0 lg:left-0" : "lg:left-0 -left-[500px]"
          } dark:bg-[#161C2C] bg-white z-30`}
        >
          <UserHead close={() => setNav(false)} />
        </div>
        {nav && (
          <div
            onClick={() => setNav(false)}
            className="fixed lg:hidden z-20 w-screen h-screen top-0 left-0 dark:bg-[#161C2C]/30 bg-white/30"
          />
        )}
        <div className="w-full">
          <div className="fixed lg:hidden z-10 top-0 left-0 w-full bg-white/5 flex justify-center">
            <div className="flex justify-between w-full py-4 gap-2 px-4">
              <p className="text-[#161C2C] dark:text-white text-2xl font-semibold">
                Tasklyn
              </p>
              <button
                onClick={() => setNav(!nav)}
                className="p-1.5 bg-white/5 rounded"
              >
                <HiMenuAlt1 className="text-2xl" />
              </button>
            </div>
          </div>
          <div className="mt-20 lg:mt-0">{children}</div>
        </div>
      </div>
    </AuthenticatedPage>
  );
};

export default UserLayout;
