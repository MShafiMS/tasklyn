import { AuthContextProvider } from "@TasklynAlias/AuthContext";
import useTheme from "@TasklynAlias/hooks/useTheme";
import "@TasklynAlias/styles/globals.css";
import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";
import config from "../aws-exports";
Amplify.configure({ ...config, ssg: true });

export default function App({ Component, pageProps }: AppProps) {
  useTheme();
  return (
    <AuthContextProvider>
      <div className="dark:bg-[#161C2C] dark:text-white min-h-screen">
        <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  );
}
