import UnauthenticatedPage from "@TasklynAlias/UnAuthenticatedPage";
import Header from "@TasklynAlias/components/Header";
import Hero from "@TasklynAlias/components/Hero";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";

const inter = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <UnauthenticatedPage>
      <Header />
      <div className="flex items-center mt-32 container mx-auto">
        <div className="w-full">
          <h1
            className={`text-6xl text-[#161C2C] dark:text-gray-300 mb-4 leading-[65px] ${inter.className}`}
          >
            Unleash Your Productivity With Precision Task Management
          </h1>
          <p className="dark:text-gray-400 text-gray-700 mb-10">
            Streamline Your Workflow and Stay Organized with our Task Management
            App. Effortlessly create, assign, and track tasks, collaborate with
            team members, set priorities, and never miss a deadline again.
            Simplify your work and boost productivity with our intuitive and
            feature-rich task management app.
          </p>
          <Link
            href={"/login"}
            className="px-10 bg-[#161C2C] dark:bg-gray-200 dark:text-gray-700 text-white py-3 text-xl rounded-lg hover:bg-opacity-90 hover:shadow-lg hover:shadow-blue-600/30"
          >
            Get Started
          </Link>
        </div>
        <div className="w-full flex justify-end">
          <Hero />
        </div>
      </div>
    </UnauthenticatedPage>
  );
}
