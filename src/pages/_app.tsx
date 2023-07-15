import { AuthContextProvider } from "@TasklynAlias/AuthContext";
import TodoProvider from "@TasklynAlias/TodoProvider";
import useTheme from "@TasklynAlias/hooks/useTheme";
import "@TasklynAlias/styles/globals.css";
import { Amplify } from "aws-amplify";
import { NextComponentType } from "next";
import type { AppProps } from "next/app";
import React from "react";
import config from "../aws-exports";
Amplify.configure({ ...config, ssg: true });

type PageLayoutComponent = NextComponentType & {
  PageLayout?: React.ComponentType;
};

export default function App({ Component, pageProps }: AppProps) {
  const PageLayout =
    (Component as PageLayoutComponent).PageLayout || React.Fragment;

  useTheme();
  return (
    <AuthContextProvider>
      <TodoProvider>
        <div className="dark:bg-[#161C2C] dark:text-white min-h-screen">
          {PageLayout ? (
            <PageLayout>
              <Component {...pageProps} />
            </PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </div>
      </TodoProvider>
    </AuthContextProvider>
  );
}
