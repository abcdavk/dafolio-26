import { ArrowUpRight, Home, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const routeLocation = useLocation();

  const hiddenLink = routeLocation.pathname !== "/" ? "/" : "/changelog";
  const hiddenText = routeLocation.pathname !== "/" ? "Go Back" : "Changelog";

  return (
    <nav className="flex justify-between items-center">
      <div className="group cursor-pointer flex">
        <div className="font-bold text-2xl group-hover:opacity-0 group-hover:scale-0 group-hover:-translate-x-14 transition-all duration-500 ease-in-out">
          Dafolio{" "}
          <span className="text-xs align-top text-black/60 bg-black/20 dark:text-white/60 dark:bg-white/20 px-1 rounded-full font-light">
            26.10
          </span>
        </div>
        <Link
          to={hiddenLink}
          className="p-2 font-bold bg-paper-reverse text-paper rounded-xl shadow-black/20 shadow-lg opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 -translate-x-30 transition-all duration-500 ease-in-out flex"
        >
          {hiddenText}{" "}
          <ArrowUpRight
            className={`transition-transform ${routeLocation.pathname !== "/" ? "rotate-180" : ""}`}
          />
        </Link>
      </div>
      {routeLocation.pathname !== "/pricing" ? (
        <Link
          to="/pricing"
          className="flex bg-paper-reverse text-paper align-middle py-4 pl-3 sm:px-2 rounded-xl font-bold shadow-black/20 shadow-lg transition-transform duration-250 ease-in-out hover:scale-103 group"
        >
          <ShoppingCart className="translate-x-2 group-hover:opacity-0 group-hover:scale-x-0 group-hover:-translate-x-2 mr-2 transition-all duration-500 ease-in-out" />
          <span className="hidden sm:block translate-x-4 group-hover:-translate-x-5 transition-all duration-500 ease-in-out">
            Place an Order
          </span>
          <ArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:scale-x-100 translate-x-6 group-hover:-translate-x-5 sm:group-hover:-translate-x-2 transition-all duration-500 ease-in-out" />
        </Link>
      ) : (
        <Link
          to="/"
          className="flex bg-paper-reverse text-paper align-middle py-4 pl-3 sm:px-2 rounded-xl font-bold shadow-black/20 shadow-lg transition-transform duration-250 ease-in-out hover:scale-103 group"
        >
          <Home className="translate-x-2 group-hover:opacity-0 group-hover:scale-x-0 group-hover:-translate-x-2 mr-2 transition-all duration-500 ease-in-out" />
          <span className="hidden sm:block translate-x-4 group-hover:-translate-x-5 transition-all duration-500 ease-in-out">
            Go Back
          </span>
          <ArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:scale-x-100 translate-x-6 group-hover:-translate-x-6 sm:group-hover:-translate-x-2 transition-all duration-500 ease-in-out rotate-180" />
        </Link>
      )}
    </nav>
  );
}
