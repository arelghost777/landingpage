import BottomNav from "@/components/BottomNav";
import Collections from "@/components/Collections";
import CreateSell from "@/components/CreateSell";
import Frame from "@/components/Frame";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
   <>
    <Navbar/>
    <main className="border-l overflow-x-hidden">
      <HeroSection/>
      <Collections/>
      <CreateSell/>
      <Frame/>
      <BottomNav/>
    </main>
   </>
  );
}
