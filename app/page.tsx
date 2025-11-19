import Intro from "@/components/Intro";
import LatestPosts from "@/components/LatestPosts";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Intro />

      <LatestPosts />

      <Projects />
    </div>
  );
}
