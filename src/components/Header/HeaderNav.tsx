import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function HeaderNav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMobileMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <>
      {/* MOBILE MENU ICON */}
      <button
        className="lg:hidden"
        onClick={toggleMobileMenu}
        aria-expanded={menuIsOpen}
        aria-controls="mobile-menu"
        aria-label={menuIsOpen ? "Close menu" : "Open menu"}
      >
        {menuIsOpen ? (
          <FaXmark aria-hidden="true" />
        ) : (
          <FaBars aria-hidden="true" />
        )}
      </button>

      {/* MOBILE NAVIGATION PANEL */}
      <div
        id="mobile-menu"
        className={`fixed top-14.5 right-0 bottom-0 z-20 w-full bg-amber-400 py-12 transition-transform duration-300 ease-in-out lg:hidden ${menuIsOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav>
          <ul className="flex flex-col items-center justify-center gap-12">
            <li>
              <a href="#about" onClick={() => setMenuIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMenuIsOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* DESKTOP NAVIGATION MENU */}
      <nav className="hidden lg:block">
        <ul className="flex gap-12">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
