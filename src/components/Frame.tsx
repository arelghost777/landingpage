import { Button } from "./ui/button";

export default function Frame(){

    return(
        <section className="mb-20">
            <div className="relative bg-[url('/frame.jpg')] text-white flex justify-center items-center bg-cover bg-center h-[336px] rounded-[30px] text-center">
                <div className="absolute inset-0 bg-black opacity-50 rounded-[30px]" />
                <div className="space-y-6 z-10">
                    <h2 className="text-5xl xl:text-7xl ">Build your NFT profile</h2>
                    <p className="xl:text-lg">Join almost 10k NFT profile on digit !</p>
                    <Button className="bg-white text-black rounded-full hover:bg-gray-300">Sign Up now</Button>
                </div>
            </div>
        </section>
    )
}