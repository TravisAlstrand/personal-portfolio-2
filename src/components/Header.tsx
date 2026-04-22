export default function Header() {
  return (
    <header className="flex justify-between px-8 py-4">
      <p>&#123; tA &#125;</p>
      <nav>
        <ul className="flex gap-12">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
