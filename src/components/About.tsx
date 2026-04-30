import { SketchUnderline } from "./ui/sketch-border";

export default function About() {
  return (
    <section
      id="about"
      className="mb-12 flex flex-col items-center justify-center px-8"
    >
      <h2 className="mb-4 text-3xl font-bold">About Me</h2>
      <SketchUnderline className="mb-8" />
      <p className="mb-4">
        I started learning to code in 2021 and quickly focused on building
        practical, real-world skills. Since then, I've worked with{" "}
        <a href="https://teamtreehouse.com" className="text-primary">
          Team Treehouse
        </a>
        , helping hundreds of students through real-time support, debugging,
        project feedback, and creating educational content that simplifies
        complex concepts.
      </p>
      <p className="mb-8">
        I'm now expanding into cybersecurity, building a foundation in threat
        analysis and system vulnerabilities. My goal is to become a SOC analyst,
        applying my technical and teaching experience to help identify and
        respond to security threats.
      </p>
      <img src="./hacker.webp" alt="Animated person sitting at computer desk" />
    </section>
  );
}
