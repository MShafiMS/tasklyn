import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("system");

  const applyTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const changeTheme = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    if (selectedTheme === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", selectedTheme);
    }
    applyTheme();
  };

  useEffect(() => {
    applyTheme();
  }, []);

  return { changeTheme, theme };
};

export default useTheme;
