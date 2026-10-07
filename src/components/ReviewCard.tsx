import {
  ArrowLeft,
  Hand,
  HandGrab,
  Layers,
  Layers2,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    username: "plast711",
    region: "United States",
    comment: "I recommend this person if you want addons made.",
    price: "Up to $50",
    duration: "3 days",
  },
  {
    username: "lexluthor059103",
    region: "United States",
    comment: "5/5 Exactly what I asked for and for a fair price too",
    price: "Up to $50",
    duration: "12 days",
  },
  {
    username: "thebeast242",
    region: "United States",
    comment:
      "I enjoyed working with him time zone was a small problem but he did well",
    price: "Up to $50",
    duration: "11 days",
  },
  {
    username: "jgarcia405",
    region: "United States",
    comment: "The addon turned out great. Turned out just as I had hoped.",
    price: "Up to $50",
    duration: "8 days",
  },
  {
    username: "blaisekey",
    region: "United States",
    comment: "I love this dudes coding skills",
    price: "Up to $50",
    duration: "1 day",
  },
  {
    username: "safxgamx",
    region: "United States",
    comment: "I loved the mod it was perfect and exactly how I wanted it",
    price: "Up to $50",
    duration: "4 days",
  },
  {
    username: "itsuki56",
    region: "Japan",
    comment:
      "I ordered to make an Anti-toxic mask for my RP Server, and I liked it so much! It's working very well as expected. I'll want to order more in the future!",
    price: "Up to $50",
    duration: "8 days",
  },
  {
    username: "samuelg4",
    region: "Mexico",
    comment:
      "Dave, es un gran desarrollador, me encanto el resultado. Buena comunicación, gran entendimiento, altamente recomendado.",
    price: "Up to $50",
    duration: "10 days",
  },
  {
    username: "wintermdev",
    region: "United States",
    comment:
      "Always amazing to work with! Happy to communicate and commission this person! I highly recommend!",
    price: "Up to $50",
    duration: "10 days",
  },
  {
    username: "tigerxxmc",
    region: "United Kingdom",
    comment: "Goated Developer Everyone buy from him",
    price: "Up to $50",
    duration: "4 days",
  },
  {
    username: "markusell",
    region: "Belarus",
    comment: "good code and delivery 👍",
    price: "Up to $50",
    duration: "1 day",
  },
  {
    username: "markikkifee",
    region: "Germany",
    comment: "he was very polite and communicative. Im very satisfied",
    price: "Up to $50",
    duration: "4 weeks",
  },
];

export default function ReviewCard() {
  const randomStart = Math.floor(Math.random() * reviews.length);

  const [review, setReview] = useState(randomStart);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [onTechStack, setOnTechStack] = useState(false);

  const nextReview = () => {
    if (isAnimating) return;
    if (!isClicking) {
      setIsClicking(true);
    }

    setIsAnimating(true);

    setTimeout(() => {
      setReview((current) => (current + 1) % reviews.length);
      setIsAnimating(false);
    }, 400);
  };

  const toggleTechStack = () => {
    setOnTechStack(!onTechStack);
  };

  return (
    <section className="relative flex flex-col items-center mt-16 px-4 py-10 text-paper rounded-2xl bg-[url('./assets/background.webp')] bg-cover overflow-hidden">
      <div
        hidden={!onTechStack}
        className="absolute flex items-center justify-center z-10 bottom-0 bg-black/50 w-full h-full p-4"
      >
        <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl">
          <h4 className="text-center font-bold text-black bg-white/40 p-2 rounded-xl">
            Tech Stack
          </h4>
          <h5 className="my-2">Web Development</h5>
          <div className="flex gap-2 flex-wrap">
            <img
              src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/React-Dark.svg"
              alt="React"
              className="transition-all h-12 w-12"
            />
            <img
              src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/VueJS-Dark.svg"
              alt="Vue"
              className="transition-all h-12 w-12"
            />
            <img
              src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/NextJS-Dark.svg"
              alt="NextJS"
              className="transition-all h-12 w-12"
            />
            <img
              src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Prisma.svg"
              alt="Prisma"
              className="transition-all h-12 w-12"
            />
            <img
              src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/TailwindCSS-Dark.svg"
              alt="Tailwind"
              className="transition-all h-12 w-12"
            />
          </div>
          <h5 className="my-2">Desktop</h5>
          <div className="flex gap-2 flex-wrap">
            <img
              src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/CS.svg"
              alt="CSharp"
              className="transition-all h-12 w-12"
            />
            <img
              src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/DotNet.svg"
              alt="DotNet"
              className="transition-all h-12 w-12"
            />
            <img
              src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/CPP.svg"
              alt="C++"
              className="transition-all h-12 w-12"
            />
            <img
              src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Python-Light.svg"
              alt="Python"
              className="transition-all h-12 w-12"
            />
            <img
              src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/QT-Light.svg"
              alt="Qt"
              className="transition-all h-12 w-12"
            />
          </div>
          <h5 className="my-2">OS</h5>
          <div className="flex gap-2 flex-wrap">
            <img
              src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Linux-Dark.svg"
              alt="Linux"
              className="transition-all h-12 w-12"
            />
            <img
              src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Windows-Light.svg"
              alt="Windows"
              className="transition-all h-12 w-12"
            />
          </div>

          <div
            onClick={toggleTechStack}
            className="mt-4 bg-white/50 p-2 text-black rounded-xl font-medium flex justify-center gap-3 cursor-pointer group"
          >
            <ArrowLeft className="group-hover:animate-wiggle" />
            Go Back
          </div>
        </div>
      </div>
      <div className="relative z-0 w-full md:max-w-120 min-h-80 group">
        <div className="absolute inset-0 bg-paper dark:slate rounded-2xl -rotate-2" />
        <div
          onClick={nextReview}
          className="relative w-full md:max-w-120 h-80 cursor-pointer"
        >
          <div
            className={`
              absolute bg-[#677956] inset-0 p-8 rounded-2xl
              transition-all duration-400 ease-in-out
              ${
                isAnimating
                  ? "translate-y-0 scale-100 rotate-0 z-20"
                  : "translate-x-1 translate-y-1 scale-95 -rotate-3 z-10"
              }
            `}
          ></div>

          <div
            className={`
              absolute inset-0 p-5 sm:p-8 flex flex-col bg-paper-reverse rounded-2xl
              transition-all duration-400 ease-in-out group hover:scale-101 animate-wiggle-slow group-hover:animate-none
              ${
                isAnimating
                  ? "-translate-y-2 scale-95 -rotate-3 opacity-0 z-10"
                  : `translate-y-0 scale-100 rotate-2 opacity-100 z-20`
              }
            `}
          >
            <div className="flex justify-between">
              <div className="mb-2">
                <p className="font-bold">{reviews[review].username}</p>

                <p className="font-light text-sm">{reviews[review].region}</p>
              </div>

              <div className="flex gap-1 h-fit items-center">
                <span className="sm:hidden font-bold">5</span>
                <Star className="fill-paper w-5 h-5" />
                <Star className="fill-paper w-5 h-5 hidden sm:block" />
                <Star className="fill-paper w-5 h-5 hidden sm:block" />
                <Star className="fill-paper w-5 h-5 hidden sm:block" />
                <Star className="fill-paper w-5 h-5 hidden sm:block" />
              </div>
            </div>

            <p>{reviews[review].comment}</p>

            <div className="flex justify-between mt-auto">
              <p className="font-bold">{reviews[review].price}</p>

              <p className="font-bold">{reviews[review].duration}</p>
            </div>
            {!isClicking && (
              <div className="absolute bottom-8 left-[50%]">
                <Hand className="text-paper scale-120 animate-bounce group-hover:hidden" />
                <HandGrab className="text-paper scale-120 animate-bounce hidden group-hover:block" />
              </div>
            )}
          </div>
        </div>
      </div>
      <section className="mt-16 p-4 gap-2 rounded-xl bg-white/20 backdrop-blur-lg flex h-18 justify-between items-center text-paper">
        <a
          href="https://github.com/abcdavk"
          target="_blank"
          className="flex relative group justify-center"
        >
          <span className="absolute bottom-18 transition-all opacity-0 group-hover:opacity-100 text-[#f2f0e3] font-medium">
            GitHub
          </span>
          <img
            src="https://raw.githubusercontent.com/Mibea/Hatter/e2be38b856d55bfa578a51c5c7c36c41528982e9/Hatter/scalable/apps/github-desktop.svg"
            alt="GitHub"
            className="transition-all h-12 w-12 hover:h-14 hover:w-14"
          />
        </a>
        <a
          href="mailto:abcdavk@proton.me"
          className="flex relative group justify-center"
        >
          <span className="absolute bottom-18 transition-all opacity-0 group-hover:opacity-100 text-[#f2f0e3] font-medium text-nowrap">
            Mail (abcdavk@proton.me)
          </span>
          <img
            src="https://raw.githubusercontent.com/Mibea/Hatter/refs/heads/main/Hatter/scalable/apps/internet-mail.svg"
            alt="Mail"
            className="transition-all h-12 w-12 hover:h-14 hover:w-14"
          />
        </a>
        <a
          href="https://discord.com/users/675339937486471178"
          target="_blank"
          className="flex relative group justify-center"
        >
          <span className="absolute bottom-18 transition-all opacity-0 group-hover:opacity-100 text-[#f2f0e3] font-medium">
            Discord
          </span>
          <img
            src="https://raw.githubusercontent.com/Mibea/Hatter/e2be38b856d55bfa578a51c5c7c36c41528982e9/Hatter/scalable/apps/discord.svg"
            alt="Discord"
            className="transition-all h-12 w-12 hover:h-14 hover:w-14"
          />
        </a>
        <div
          className="flex relative group justify-center cursor-pointer"
          onClick={toggleTechStack}
        >
          <span className="absolute bottom-16 transition-all opacity-0 group-hover:opacity-100 text-[#f2f0e3] font-medium text-nowrap">
            Tech Stack
          </span>
          <Layers className="transition-all h-10 w-10 group-hover:hidden text-white bg-black/30 p-2 rounded-lg" />
          <Layers2 className="transition-all h-10 w-10 hidden group-hover:block text-white bg-black/30 p-2 rounded-lg" />
        </div>
      </section>
    </section>
  );
}
