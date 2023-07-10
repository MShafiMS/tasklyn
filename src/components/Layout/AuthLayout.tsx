import React from "react";
import Header from "../Header";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
