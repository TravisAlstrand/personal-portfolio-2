import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex justify-between border-b-2 px-8 py-4">
      <p>&#123; tA &#125;</p>
      <HeaderNav />
    </header>
  );
}
