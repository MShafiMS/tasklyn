import Logo from "../Logo";

const Loader = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-50 flex justify-center items-center dark:bg-[#161C2C]/40 bg-white/40">
      <div className="flex items-center gap-2 animate-bounce">
        <Logo size="60" />
        <p className="text-[#161C2C] dark:text-white text-4xl font-semibold">
          Tasklyn
        </p>
      </div>
    </div>
  );
};

export default Loader;
