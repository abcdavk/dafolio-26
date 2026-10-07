import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer
      className="mt-4 py-0 px-6 rounded-xl bg-paper-reverse flex justify-between items-center text-paper group cursor-pointer overflow-y-hidden"
      onClick={backToTop}
    >
      <div className="font-bold">
        <p className="transition-transform -translate-y-12 group-hover:translate-y-3 flex gap-2">
          Back to top <ArrowUp className="animate-bounce" />
        </p>
        <p className="transition-transform -translate-y-3 group-hover:translate-y-12">
          Dafolio
        </p>
      </div>
      <div className="hidden sm:block">
        <div className="flex gap-3">
          <p className="translate-x-9 group-hover:translate-x-0 transition-transform">
            Made by 100%{" "}
            <span className="font-serif italic font-bold">human</span>
          </p>
          <Heart className="transition-transform scale-0 group-hover:scale-100 fill-paper" />
        </div>
      </div>
    </footer>
  );
}
