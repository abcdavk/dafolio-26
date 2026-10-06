import {
  ArrowUpRight,
  CircleDollarSign,
  Cog,
  MessageSquareCheck,
  MessagesSquare,
  PackageCheck,
  PackageOpen,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import ReviewCard from "../components/ReviewCard";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section className="mt-16">
        <h1 className="text-center" id="hero-section">
          A dedicated{" "}
          <span className="italic text-[#41681b] dark:text-[#bbeb8b]">
            programmer
          </span>
          <br />
          at your <span className="underline">service</span>.
        </h1>
      </section>
      <section className="flex flex-col sm:flex-row items-center sm:justify-center mt-16 gap-3 sm:gap-6">
        <Link
          to="/pricing"
          className="w-fit flex bg-paper-reverse text-paper align-middle py-4 px-2 rounded-xl font-bold shadow-black/20 shadow-lg transition-transform duration-250 ease-in-out hover:scale-103 group"
        >
          <ShoppingCart className="translate-x-2 group-hover:opacity-0 group-hover:scale-x-0 group-hover:-translate-x-2 mr-2 transition-all duration-500 ease-in-out" />
          <span className="translate-x-4 group-hover:-translate-x-5 transition-all duration-500 ease-in-out">
            Place an Order
          </span>
          <ArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:scale-x-100 translate-x-6 group-hover:-translate-x-2 transition-all duration-500 ease-in-out" />
        </Link>
        <Link
          to="/projects"
          className="w-fit flex gap-4 align-middle py-4 px-6 rounded-xl font-bold border border-paper-reverse transition-transform duration-250 ease-in-out hover:scale-103 group"
        >
          <Cog className="group-hover:animate-spin" />
          <span className="">My Projects</span>
        </Link>
      </section>
      <h2 className="text-paper-reverse pb-2 text-center mt-16 animate-pulse hover:animate-none">
        Trustworthy
      </h2>
      <section className="flex flex-col sm:flex-row sm:justify-center sm:mt-4 gap-6">
        <div className="flex flex-col items-center gap-3 group">
          <PackageCheck className="group-hover:hidden" height={64} width={64} />
          <PackageOpen
            className="hidden group-hover:block animate-wiggle"
            height={64}
            width={64}
          />
          <p className="font-bold">On Time Delivery</p>
        </div>
        <div className="flex flex-col items-center gap-3 group">
          <MessageSquareCheck
            className="group-hover:hidden"
            height={64}
            width={64}
          />
          <MessagesSquare
            className="hidden group-hover:block animate-wiggle"
            height={64}
            width={64}
          />
          <p className="font-bold">Communicative</p>
        </div>
        <div className="flex flex-col items-center gap-3 group">
          <Sparkles className="group-hover:hidden" height={64} width={64} />
          <p className="hidden group-hover:block text-2xl font-bold h-full p-2 text-paper border bg-paper-reverse rounded-lg pt-4 animate-wiggle">
            4.9/5.0
          </p>
          <p className="font-bold">Excelent Rating</p>
        </div>
        <div className="flex flex-col items-center gap-3 group">
          <CircleDollarSign
            className="group-hover:hidden"
            height={64}
            width={64}
          />
          <CircleDollarSign
            className="hidden group-hover:block animate-spin-y"
            height={64}
            width={64}
          />
          <p className="font-bold">Affordable</p>
        </div>
      </section>
      <ReviewCard />
    </>
  );
}
