import Link from "next/link";
import React from "react";
import AuthImg from "../AuthImg";
import Logo from "../Logo";

const AuthLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <div className="lg:flex bg-white h-screen">
      <div className="flex flex-col w-full lg:bg-[#161C2C] lg:h-screen text-gray-200">
        <Link
          href={"/"}
          className="h-fit flex items-center gap-2 mt-8 lg:ml-12 ml-4"
        >
          <Logo size="45" auth />
          <p className="lg:text-white text-[#161C2C] text-2xl font-semibold">
            Tasklyn
          </p>
        </Link>
        <div className="h-full lg:flex hidden flex-col justify-center items-center">
          <AuthImg />
          <h1 className="text-center font-serif text-3xl mt-4">
            {title || "Welcome Back"}
          </h1>
          <p className="text-lg">Just a couple of clicks and we start</p>
        </div>
      </div>
      <div className="w-full bg-white lg:my-0 my-16 lg:h-screen flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
