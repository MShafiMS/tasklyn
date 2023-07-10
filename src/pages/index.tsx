import UnauthenticatedPage from "@TasklynAlias/UnAuthenticatedPage";
import AuthLayout from "@TasklynAlias/components/Layout/AuthLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <UnauthenticatedPage>
      <AuthLayout>
        <div>this is home page</div>
      </AuthLayout>
    </UnauthenticatedPage>
  );
}
