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

      {/* DESKTOP NAVIGATION MENU */}
      <nav className="hidden lg:block">
        <ul className="flex gap-12">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
