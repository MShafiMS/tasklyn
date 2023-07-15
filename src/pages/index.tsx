import UnauthenticatedPage from "@TasklynAlias/UnAuthenticatedPage";
import Header from "@TasklynAlias/components/Header";
import Hero from "@TasklynAlias/components/Hero";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";

const inter = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const Home = () => {
  return (
    <UnauthenticatedPage>
      <div>
        <Header />
        <div className="flex lg:flex-row flex-col-reverse items-center mx-4 lg:py-0 py-12 lg:mt-32 lg:container lg:mx-auto">
          <div className="w-full">
            <h1
              className={`lg:text-6xl text-3xl text-[#161C2C] dark:text-gray-300 mb-4 lg:leading-[65px] ${inter.className}`}
            >
              Unleash Your Productivity With Precision Task Management
            </h1>
            <p className="dark:text-gray-400 text-gray-700 mb-10">
              Streamline Your Workflow and Stay Organized with our Task
              Management App. Effortlessly create, assign, and track tasks,
              collaborate with team members, set priorities, and never miss a
              deadline again. Simplify your work and boost productivity with our
              intuitive and feature-rich task management app.
            </p>
            <Link
              href={"/register"}
              className="px-10 bg-[#161C2C] dark:bg-gray-200 dark:text-gray-700 text-white py-3 text-xl rounded-lg hover:bg-opacity-90 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Get Started
            </Link>
          </div>
          <div className="w-full flex justify-center lg:justify-end">
            <Hero />
          </div>
        </div>
      </div>
    </UnauthenticatedPage>
  );
};

export default Home;
