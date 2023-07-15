import { Spectral } from "next/font/google";
import { useRouter } from "next/router";
import { PropsWithChildren, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";

const spectral = Spectral({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function UnauthenticatedPage(
  props: PropsWithChildren<Record<string, unknown>>
) {
  const router = useRouter();
  const { authState } = useContext(AuthContext);
  const { children } = props;

  useEffect(() => {
    if (authState === "authenticated") {
      router.replace("/todo");
    }
  }, [authState, router]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <div className={spectral.className}>{children}</div>;
}
