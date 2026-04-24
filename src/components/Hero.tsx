import { SketchBorderWrapper, SketchUnderline } from "./ui/sketch-border";

export default function Hero() {
  return (
    <SketchBorderWrapper className="mx-auto w-11/12 p-8">
      <section className="mx-auto max-w-4xl p-6">
        <p className="text-muted-foreground mb-2">Well Hello There...</p>
        <h1 className="mb-4 text-5xl font-bold">I'm Travis</h1>
        <span className="text-lg">
          A developer transitioning into cybersecurity.
        </span>
        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="relative inline-block px-6 py-3 transition-opacity hover:opacity-80"
          >
            <span className="relative">View Projects</span>
            <SketchUnderline className="text-primary absolute bottom-0 left-0 w-full" />
          </a>
          <a
            href="#contact"
            className="relative inline-block px-6 py-3 transition-opacity hover:opacity-80"
          >
            <span className="relative">Contact Me</span>
            <SketchUnderline className="text-primary absolute bottom-0 left-0 w-full" />
          </a>
        </div>
      </section>
    </SketchBorderWrapper>
  );
}
