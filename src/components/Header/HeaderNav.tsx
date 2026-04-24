import { FaBars, FaXmark } from "react-icons/fa6";

export default function HeaderNav({
  menuIsOpen,
  onMenuToggle,
}: {
  menuIsOpen: boolean;
  onMenuToggle: () => void;
}) {
  return (
    <>
      {/* MOBILE MENU ICON */}
      <button
        className="lg:hidden"
        onClick={onMenuToggle}
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
