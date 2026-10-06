import { ProjectCard, type ProjectCardProps } from "../components/ProjectCard";
import larisInImageUrl from "../assets/projects/laris-in.png";
import { ArrowDown } from "lucide-react";

const projectList: ProjectCardProps[] = [
  {
    title: "LarisIn",
    description:
      "Digital control center for SMEs. (I'm working as backend developer)",
    createDate: "September, 2026",
    status: "LTS",
    tags: ["Web", "Team Based"],
    coverUrl: larisInImageUrl,
    to: "https://laris-in.vercel.app/",
  },
  {
    title: "SimpL Object Detection",
    description:
      "Demonstrates how to integrate a webcam with TensorFlow's object detection capabilities.",
    createDate: "December 28, 2024",
    status: "RIP",
    tags: ["Web", "ML"],
    coverUrl:
      "https://github.com/abcdavk/simple-object-detection/blob/main/public/img/image.png?raw=true",
    to: "https://simple-object-detection.vercel.app/",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="mt-16">
        <h1>Project Showcase</h1>
        <p className="mt-8">Glimpse of My Projects.</p>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {projectList.map((project, index) => {
            return (
              <ProjectCard
                title={project.title}
                description={project.description}
                createDate={project.createDate}
                coverUrl={project.coverUrl}
                status={project.status}
                tags={project.tags}
                to={project.to}
                key={index}
              />
            );
          })}
        </div>
      </section>
      <section className="mt-16">
        <label>
          <input className="peer/showLabel absolute scale-0" type="checkbox" />
          <span className="block max-h-14 max-full overflow-hidden rounded-xl bg-gray-400/10 dark:bg-gray-500/10 px-4 py-0 transition-all duration-300 peer-checked/showLabel:max-h-52 group">
            <h3 className="flex h-14 cursor-pointer items-center font-sans justify-between">
              Common Terms
              <ArrowDown className="group-hover:animate-bounce" />
            </h3>
            <div className="flex flex-col gap-2 mb-5">
              <div className="flex gap-3">
                <span className="mt-auto px-2 py-1 rounded-xl text-xs font-bold w-fit text-white dark:text-black bg-[#84B179] dark:bg-[#A2CB8B]">
                  LTS
                </span>
                <span>Long-term Support</span>
              </div>
              <div className="flex gap-3">
                <span className="mt-auto px-2 py-1 rounded-xl text-xs font-bold w-fit text-white dark:text-black bg-[#3368A0] dark:bg-[#66A3BF]">
                  WIP
                </span>
                <span>Work In Progress</span>
              </div>
              <div className="flex gap-3">
                <span className="mt-auto px-2 py-1 rounded-xl text-xs font-bold w-fit text-white bg-[#777C6D]">
                  RIP
                </span>
                <span>Rest In Peace (Dead)</span>
              </div>
            </div>
          </span>
        </label>
      </section>
    </>
  );
}
