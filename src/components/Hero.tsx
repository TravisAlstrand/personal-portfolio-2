import { SketchBorderWrapper, SketchUnderline } from "./ui/sketch-border";

export default function Hero() {
  return (
    <SketchBorderWrapper className="mx-auto mb-12 w-11/12 px-8 py-12">
      <section className="mx-auto flex max-w-4xl flex-col">
        <div>
          <p className="mb-2">Well hello there...</p>
          <h1 className="mb-4 text-5xl font-bold">I'm Travis</h1>
          <p className="mb-8 text-lg">
            A developer transitioning into cybersecurity.
          </p>
          <img
            src="./laptop.webp"
            alt="Animated laptop with a security shield on the screen."
            className="mb-8"
          />
          <div className="mt-6 flex w-full justify-center gap-4">
            <a
              href="#projects"
              className="text-primary relative inline-block p-4 transition-opacity hover:opacity-80"
            >
              <span className="relative">View Projects</span>
              <SketchUnderline className="absolute bottom-0 left-0 w-full" />
            </a>
            <a
              href="#contact"
              className="text-primary relative inline-block p-4 transition-opacity hover:opacity-80"
            >
              <span className="relative">Contact Me</span>
              <SketchUnderline className="absolute bottom-0 left-0 w-full" />
            </a>
          </div>
        </div>
        <div className="hidden">
          <img
            src="./laptop.webp"
            alt="Laptop with a security shield on the screen."
          />
        </div>
      </section>
    </SketchBorderWrapper>
  );
}
