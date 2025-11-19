import Projects from "@/components/Projects";
import Intro from "@/components/Intro";
import LatestPosts from "@/components/LatestPosts";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Intro />

      <Experience />

      <LatestPosts />

      <Projects />
    </div>
  );
}
