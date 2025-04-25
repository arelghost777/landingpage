import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function BottomNav(){

    return(
        <footer>
            <div className="py-2">
                <Image src="/frame1.png" alt="frame" width="40" height="40" />
            </div>
            <div className="border-t py-6 flex flex-wrap justify-between space-y-6">
                <div>
                    <h2 className="text-2xl font-medium">Create Explore & Collect Digital  NFTs</h2>
                </div>
                <div className="">
                    <Link href="#" className="inline-block"><Button variant="link" className="sm:text-md">Privacy</Button></Link>
                    <Link href="#" className="inline-block"><Button variant="link" className="sm:text-md">Terms & Conditions</Button></Link>
                    <Link href="#" className="inline-block"><Button variant="link" className="sm:text-md">About Us</Button></Link>
                </div>
            </div>
        </footer>
    )
}