import { SketchUnderline } from "./ui/sketch-border";

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center">
      <h2 className="text-3xl">About Me</h2>
      <img src="./hacker.webp" alt="Person sitting at computer desk hacking" />
      <SketchUnderline />
    </section>
  );
}
