import { Check } from "lucide-react";

export default function PricingPage() {
    return (
        <>
            <section className="mt-16">
                <h1 className="text-center">Pricing</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-4 mt-8">
                    <div className="bg-amber-200/10 w-full p-3 rounded-xl cursor-pointer hover:scale-101 transition-transform">
                        <div className="flex flex-col bg-gray-400/10 p-5 rounded-lg h-72 max-h-72">
                            <h3 className="text-5xl">Starter</h3>
                            <p className="pt-2">Simple features.</p>
                            <div className="flex justify-between mt-auto">
                                <p className="font-serif text-7xl font-extralight">$10 <span className="text-2xl line-through align-top">$15</span></p>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 p-2">
                            <p className="uppercase font-bold pr-4">Features</p>
                            <ul className="text-lg">
                                <li className="flex gap-1"><Check className="pt-1" height={24} width={24}/>Small Feature</li>
                                <li className="flex gap-1"><Check className="pt-1" height={24} width={24}/>Fast delivery</li>
                                <li className="flex gap-1"><Check className="pt-1" height={24} width={24}/>3 months of patch updates</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-amber-200/10 w-full p-3 rounded-xl cursor-pointer hover:scale-101 transition-transform">
                        <div className="flex flex-col bg-gray-400/10 p-5 rounded-lg h-72 max-h-72">
                            <h3 className="text-5xl">Standard</h3>
                            <p className="pt-2">More complex features and Standard multiplayer addon.</p>
                            <div className="flex justify-between mt-auto">
                                <p className="font-serif text-7xl font-extralight">$25 <span className="text-2xl line-through align-top">$30</span></p>
                                <p className="mt-auto bg-amber-600/10 px-2 py-1 rounded-lg">Best Offer</p>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 p-2">
                            <p className="uppercase font-bold pr-4">Features</p>
                            <ul className="text-lg">
                                <li className="flex gap-1"><Check className="pt-1" height={24} width={24}/>Everything in Starter</li>
                                <li className="flex gap-1"><Check className="pt-1" height={24} width={24}/>Polished final result</li>
                                <li className="flex gap-1"><Check className="pt-1" height={24} width={24}/>6 months of patch updates</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-amber-200/10 w-full p-3 rounded-xl cursor-pointer hover:scale-101 transition-transform">
                        <div className="flex flex-col bg-gray-400/10 p-5 rounded-lg h-72 max-h-72">
                            <h3 className="text-5xl">Super</h3>
                            <p className="pt-2">Highest quality addon.</p>
                            <div className="flex justify-between mt-auto">
                                <p className="font-serif text-7xl font-extralight">$50 <span className="text-2xl align-top">to $100</span></p>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 p-2">
                            <p className="uppercase font-bold pr-4">Features</p>
                            <ul className="text-lg">
                                <li className="flex gap-1"><Check className="pt-1" height={24} width={24}/>Everything in Standard</li>
                                <li className="flex gap-1"><Check className="pt-1" height={24} width={24}/>Advanced custom work</li>
                                <li className="flex gap-1"><Check className="pt-1" height={24} width={24}/>Complex feature delivery</li>
                                <li className="flex gap-1"><Check className="pt-1" height={24} width={24}/>Lifetime patch updates</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex justify-center">
                <div className="flex flex-col items-center w-fit mt-16 bg-amber-200/10 rounded-2xl p-8">
                    <h2 className="text-center">Let's Build Something Amazing</h2>
                    <div className="bg-gray-400/10 rounded-xl p-4 mt-2 max-w-148 flex flex-col transition-transform hover:scale-101">
                        <p className="text-lg">Looking for a developer who enjoys solving problems, building web applications, or creating custom Minecraft Bedrock addons? I'd love to help bring your ideas to life. </p>
                    </div>
                    <a href="https://www.fiverr.com/dave_64" className="mt-8 p-2 text-paper bg-paper-reverse text-center w-full rounded-xl transition-transform hover:scale-101 font-bold">
                        Hire Me on Fiverr
                    </a>
                </div>
            </section>
        </>
    )
}