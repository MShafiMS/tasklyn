import Image from "next/image";
import Link from "next/link";

const Soon = ({ title }: { title: string }) => {
  return (
    <div className="dark:text-gray-300 h-screen flex items-center justify-center">
      <div className="flex flex-col justify-between lg:flex-row-reverse">
        <Image
          width={300}
          height={300}
          alt="img"
          src={
            "https://webb-school-mission-2022.vercel.app/static/media/underconstruction.7f2ca68c6cc87e5e08f4.png"
          }
          className="rounded-lg max-w-xl"
        />
        <div className="uppercase whitespace-nowrap text-center lg:text-left">
          <h1 className="py-4 lg:text-5xl md:text-5xl text-4xl font-sub">
            {title} Is
          </h1>
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
            Under Construction
          </h1>
          <p className="text-lg py-6"></p>
          <Link
            className="font-medium px-4 rounded bg-black/10 dark:bg-white/10 py-3"
            href={"/todo"}
          >
            Go to task Board
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Soon;
