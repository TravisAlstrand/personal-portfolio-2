import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "@/hooks/useTheme";

import HeaderNav from "./HeaderNav";
import { SketchBorderWrapper } from "../ui/sketch-border";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <div className="bg-background sticky top-0 z-10 flex w-full justify-center">
        <SketchBorderWrapper className="bg-card mt-4 w-11/12 px-6 py-4">
          <header className="flex items-center justify-between">
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
            <HeaderNav
              menuIsOpen={menuIsOpen}
              onMenuToggle={() => setMenuIsOpen(!menuIsOpen)}
            />
          </header>
        </SketchBorderWrapper>
      </div>

      {/* MOBILE NAVIGATION PANEL */}
      <div
        className={`fixed top-18 left-1/2 z-20 w-11/12 max-w-sm transition-transform duration-300 ease-in-out lg:hidden ${menuIsOpen ? "-translate-x-1/2" : "translate-x-full"}`}
      >
        <SketchBorderWrapper className="bg-card p-12">
          <nav
            id="mobile-menu"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col items-center justify-center gap-8">
              <li>
                <a
                  href="#about"
                  onClick={() => setMenuIsOpen(false)}
                  className="hover:text-primary text-lg transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => setMenuIsOpen(false)}
                  className="hover:text-primary text-lg transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuIsOpen(false)}
                  className="hover:text-primary text-lg transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </SketchBorderWrapper>
      </div>
    </>
  );
}
