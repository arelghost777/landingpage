import ArrowLongRightIcon from "@heroicons/react/24/solid/ArrowLongRightIcon";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col lg:flex-row h-screen my-10">
        <div className="w-4/5 md:4/6 lg:w-2/3 space-y-6">
            <h1 className="text-6xl/15 md:text-8xl/20 lg:text-9xl/30 font-light">See the NFT  new world</h1>
            <div className="lg:w-1/2 ">
                <p className="font-medium text-base text-muted-foreground mb-6">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, di</p>
                <div className="flex gap-4 items-center">
                    <span className="inline-block font-medium">Discover Now</span><Link href="#"><span className="border-black inline-block p-2 rounded-full border"><ArrowLongRightIcon className=" w-5"/></span></Link>
                </div>
            </div>
        </div>
        <div className="relative lg:absolute top-[19px] w-[596.89px] gap-[10px] right-0 z-[-1]">
            <div className="absolute left-40"><img src="/frame2.png" alt="frame" className="w-[157px]" /></div>
            <div className="top-[145.9px] absolute bg-no-repeat bg-[url('/img4.jpg')] bg-cover bg-center h-[442.29px] w-[287.58px] rounded-full">
                
            </div>
            <div className="absolute bg-no-repeat bg-[url('/img1.jpg')] bg-cover bg-center h-[442.29px] w-[287.58px] rounded-full top-0 right-0">
                
            </div>
        </div>
    </div>
  );
}