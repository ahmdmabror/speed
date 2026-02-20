import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpeedTimeline from "@/components/SpeedTimeline";
import Charts from "@/components/Charts";
import Stats from "@/components/Stats";
import EmergingTech from "@/components/EmergingTech";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SpeedTimeline />
        <Charts />
        <Stats />
        <EmergingTech />
      </main>
      <Footer />
    </>
  );
}
