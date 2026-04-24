import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "@/hooks/useTheme";

import HeaderNav from "./HeaderNav";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-background sticky top-0 z-10 flex justify-center">
      <header className="bg-card border-border mt-4 flex w-11/12 justify-between rounded-4xl border-2 px-6 py-2">
        <p>&#123; tA &#125;</p>
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <FaMoon aria-hidden="true" />
          ) : (
            <FaSun aria-hidden="true" />
          )}
        </button>
        <HeaderNav />
      </header>
    </div>
  );
}
