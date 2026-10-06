import { ArrowUpRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <section className="flex flex-col items-center">
        <h1 className="not-found-title">404</h1>
        <p className="mt-4">This page is doesn't exist.</p>
        <Link
          to="/"
          className="flex mt-4 bg-paper-reverse text-paper align-middle py-4 pl-3 sm:px-2 rounded-xl font-bold shadow-black/20 shadow-lg transition-transform duration-250 ease-in-out hover:scale-103 group"
        >
          <Home className="translate-x-2 group-hover:opacity-0 group-hover:scale-x-0 group-hover:-translate-x-2 mr-2 transition-all duration-500 ease-in-out" />
          <span className="translate-x-4 group-hover:-translate-x-5 transition-all duration-500 ease-in-out">
            Go Back
          </span>
          <ArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:scale-x-100 translate-x-6 group-hover:-translate-x-6 sm:group-hover:-translate-x-2 transition-all duration-500 ease-in-out rotate-180" />
        </Link>
      </section>
    </>
  );
}
