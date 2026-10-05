import { ChevronLeft, ChevronRight, Hand, HandGrab, Loader, Star } from "lucide-react";
import { useState, type Dispatch } from "react";

const reviews = [
  {
    username: 'plast711',
    region: 'United States',
    comment: 'I recommend this person if you want addons made.',
    price: 'Up to $50',
    duration: '3 days',
  },
  {
    username: 'lexluthor059103',
    region: 'United States',
    comment: '5/5 Exactly what I asked for and for a fair price too',
    price: 'Up to $50',
    duration: '12 days',
  },
  {
    username: 'thebeast242',
    region: 'United States',
    comment: 'I enjoyed working with him time zone was a small problem but he did well',
    price: 'Up to $50',
    duration: '11 days',
  },
  {
    username: 'jgarcia405',
    region: 'United States',
    comment: 'The addon turned out great. Turned out just as I had hoped.',
    price: 'Up to $50',
    duration: '8 days',
  },
  {
    username: 'blaisekey',
    region: 'United States',
    comment: 'I love this dudes coding skills',
    price: 'Up to $50',
    duration: '1 day',
  },
  {
    username: 'safxgamx',
    region: 'United States',
    comment: 'I loved the mod it was perfect and exactly how I wanted it',
    price: 'Up to $50',
    duration: '4 days',
  },
  {
    username: 'itsuki56',
    region: 'Japan',
    comment: "I ordered to make an Anti-toxic mask for my RP Server, and I liked it so much! It's working very well as expected. I'll want to order more in the future!",
    price: 'Up to $50',
    duration: '8 days',
  },
  {
    username: 'samuelg4',
    region: 'Mexico',
    comment: 'Dave, es un gran desarrollador, me encanto el resultado. Buena comunicación, gran entendimiento, altamente recomendado.',
    price: 'Up to $50',
    duration: '10 days',
  },
  {
    username: 'wintermdev',
    region: 'United States',
    comment: 'Always amazing to work with! Happy to communicate and commission this person! I highly recommend!',
    price: 'Up to $50',
    duration: '10 days',
  },
  {
    username: 'tigerxxmc',
    region: 'United Kingdom',
    comment: 'Goated Developer Everyone buy from him',
    price: 'Up to $50',
    duration: '4 days',
  },
  {
    username: 'markusell',
    region: 'Belarus',
    comment: 'good code and delivery 👍',
    price: 'Up to $50',
    duration: '1 day',
  },
  {
    username: 'markikkifee',
    region: 'Germany',
    comment: 'he was very polite and communicative. Im very satisfied',
    price: 'Up to $50',
    duration: '4 weeks',
  },
]

export default function ReviewCard() {
  const randomStart = Math.floor(Math.random() * reviews.length)

  const [review, setReview] = useState(randomStart)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  const nextReview = () => {
    if (isAnimating) return
    if (!isClicking) {
      setIsClicking(true)
    }

    setIsAnimating(true)

    setTimeout(() => {
      setReview((current) => (current + 1) % reviews.length)
      setIsAnimating(false)
    }, 400)
  }

  return (
    <section className="flex flex-col items-center sm:mt-16 p-4 pb-10 text-paper rounded-2xl sm:bg-[url('./assets/background.png')] bg-cover">
      <h2 className="text-[#f2f0e3] pb-2">Trustworthy</h2>
      <div className="relative w-full md:max-w-120 min-h-80">
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
          >
          </div>

          <div
            className={`
              absolute inset-0 p-8 flex flex-col bg-paper-reverse rounded-2xl
              transition-all duration-400 ease-in-out group hover:scale-101
              ${
                isAnimating
                  ? "-translate-y-2 scale-95 -rotate-3 opacity-0 z-10"
                  : `translate-y-0 scale-100 rotate-2 opacity-100 z-20`
              }
            `}
          >
            <div className="flex justify-between">
              <div className="mb-2">
                <p className="font-bold">
                  {reviews[review].username}
                </p>

                <p className="font-light text-sm">
                  {reviews[review].region}
                </p>
              </div>

              <div className="flex gap-1">
                <Star className="fill-paper" />
                <Star className="fill-paper" />
                <Star className="fill-paper" />
                <Star className="fill-paper" />
                <Star className="fill-paper" />
              </div>
            </div>

            <p>{reviews[review].comment}</p>

            <div className="flex justify-between mt-auto">
              <p className="font-bold">
                {reviews[review].price}
              </p>

              <p className="font-bold">
                {reviews[review].duration}
              </p>
            </div>
            {
              !isClicking && (
                <div className="absolute bottom-8 left-[50%]">
                  <Hand className="text-paper scale-120 animate-bounce group-hover:hidden" />
                  <HandGrab className="text-paper scale-120 animate-bounce hidden group-hover:block" />
                </div>
              ) 
            }
          </div>
        </div>
      </div>
    </section>
  )
}