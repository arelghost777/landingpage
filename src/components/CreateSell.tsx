import { BoltSlashIcon, CloudArrowDownIcon, CubeIcon, WalletIcon } from "@heroicons/react/24/outline";

export default function CreateSell(){

    return(
        <section className="mb-20">
            <h2 className="font-bold text-2xl md:text-3xl mb-6">Create and Sell Now</h2>
            <div className="flex flex-wrap justify-center gap-5">
                <div className="p-6 rounded-[25px] bg-gray-200 space-y-2 border w-[282px]">
                    <div className="rounded-lg bg-black inline-block p-2"><WalletIcon className="text-white w-12"/></div>
                        <h2 className="font-bold text-2xl">Set up your wallet</h2>
                        <p className="text-base text-muted-foreground font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
                <div className="p-6 rounded-[25px] bg-gray-200 space-y-2 border w-[282px]">
                    <div className="rounded-lg bg-black inline-block p-2"><CloudArrowDownIcon className="text-white w-12"/></div>
                    <h2 className="font-bold text-2xl">Add your NFT’s</h2>
                    <p className="text-base text-muted-foreground font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
                <div className="p-6 rounded-[25px] bg-gray-200 space-y-2 border w-[282px]">
                    <div className="rounded-lg bg-black inline-block p-2"><BoltSlashIcon className="text-white w-12"/></div>
                    <h2 className="font-bold text-2xl">Promote your NFT’s</h2>
                    <p className="text-base text-muted-foreground font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
                <div className="p-6 rounded-[25px] bg-gray-200 space-y-2 border w-[282px]">
                    <div className="rounded-lg bg-black inline-block p-2"><CubeIcon className="text-white w-12"/></div>
                        <h2 className="font-bold text-2xl">Sell your NFT’s</h2>
                        <p className="text-base text-muted-foreground font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
            </div>
        </section>
    );
}