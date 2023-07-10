import { useRouter } from "next/router";
import { PropsWithChildren, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthenticatedPage({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  const router = useRouter();

  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (authState === "unauthenticated") {
      router.replace("/login");
    }
  }, [authState, router]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
