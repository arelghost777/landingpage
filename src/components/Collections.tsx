import Link from "next/link";
import { Button } from "./ui/button";

export default function Collections() {
  return (
    <section className="mt-100 mb-20 lg:mt-0">
        <h2 className="font-bold text-2xl md:text-3xl">Our Collections</h2>
        <div className="flex flex-wrap items-center my-6">
           <div className="flex gap-4">
                <Link href="#"><Button className="bg-black px-10">All categories</Button></Link>
                <Link href="#"><Button className="bg-gray-300 text-black px-10">Art</Button></Link>
                <Link href="#"><Button className="bg-gray-300 text-black px-10">Celebrities</Button></Link>
                <Link href="#"><Button className="bg-gray-300 text-black px-10">Gaming</Button></Link>
                <Link href="#"><Button className="bg-gray-300 text-black px-10">Sport</Button></Link>
           </div>
           <div className="flex justify-end w-full">
                <Link href="#"><Button variant="link">View more</Button></Link>
           </div>
        </div>
        <div className="flex justify-center flex-wrap gap-5 text-center">
          <div className="rounded-xl border p-2 w-[282px] flex justify-center">
            <div>
              <div className="bg-[url('/img5.png')] h-[213px] w-[258px] bg-cover bg-center rounded-lg"></div>
              <div className="flex justify-between my-3 font-medium">
                <span className="inline-block">CyberPunk</span>
                <span className="block gap-1 flex"><img src="/ethereum-ellipse.png" alt="Ethereum" />68</span>
              </div>
              <Button variant="outline" className="w-full border border-black">Place a Bid</Button>
            </div>
          </div>
          <div className="rounded-xl border p-2  w-[282px] flex justify-center">
            <div>
              <div className="bg-[url('/img6.jpg')] h-[213px] w-[258px] bg-cover bg-center rounded-lg"></div>
              <div className="flex justify-between my-3 font-medium">
                <span className="inline-block">Durolost Boll - Uper</span>
                <span className="block gap-1 flex"><img src="/ethereum-ellipse.png" alt="Ethereum"/>68</span>
              </div>
              <Button variant="outline" className="w-full border border-black">Place a Bid</Button>
            </div>
          </div>
          <div className="rounded-xl border p-2  w-[282px] flex justify-center">
            <div>
              <div className="bg-[url('/img3.jpg')] h-[213px] w-[258px] bg-cover bg-center rounded-lg"></div>
              <div className="flex justify-between my-3 font-medium">
                <span className="inline-block">Space X Wiper</span>
                <span className="block gap-1 flex"><img src="/ethereum-ellipse.png" alt="Ethereum" />68</span>
              </div>
              <Button variant="outline" className="w-full border border-black">Place a Bid</Button>
            </div>
          </div>
          <div className="rounded-xl border p-2  w-[282px] flex justify-center">
            <div>
              <div className="bg-[url('/img2.png')] h-[213px] w-[258px] bg-cover bg-center rounded-lg"></div>
              <div className="flex justify-between my-3 font-medium">
                <span className="inline-block">Snoop Dog</span>
                <span className="block gap-1 flex"><img src="/ethereum-ellipse.png" alt="Ethereum" />68</span>
              </div>
              <Button variant="outline" className="w-full border border-black">Place a Bid</Button>
            </div>
          </div>
        </div>
    </section>
  );
}