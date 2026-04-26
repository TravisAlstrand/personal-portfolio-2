import { SketchBorderWrapper, SketchUnderline } from "./ui/sketch-border";

export default function Projects() {
  return (
    <SketchBorderWrapper className="mx-auto mb-12 w-11/12 px-8 py-12">
      <section className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <SketchUnderline className="mb-8" />
      </section>
    </SketchBorderWrapper>
  );
}
