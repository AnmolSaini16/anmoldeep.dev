import { WorkPlaces } from "@/components/WorkPlaces";
import Projects from "@/components/Projects";
import Intro from "@/components/Intro";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Intro />

      <About />

      <WorkPlaces />

      <Projects />
    </div>
  );
}
