import { ArrowUpRight } from "lucide-react";

export type ProjectStatus = "WIP" | "LTS" | "RIP";

export interface ProjectCardProps {
  title: string;
  description: string;
  createDate: string;
  status: ProjectStatus;
  coverUrl: string;
  tags?: string[];
  to?: string;
}

export function ProjectCard({
  title,
  description,
  createDate,
  status,
  tags = [],
  coverUrl,
  to = "",
}: ProjectCardProps) {
  let statusStyle = "mt-auto px-2 py-1 rounded-xl text-xs font-bold w-fit ";

  switch (status) {
    case "LTS":
      statusStyle +=
        "text-white dark:text-black bg-[#84B179] dark:bg-[#A2CB8B]";
      break;
    case "WIP":
      statusStyle +=
        "text-white dark:text-black bg-[#3368A0] dark:bg-[#66A3BF]";
      break;
    case "RIP":
      statusStyle += "text-white bg-[#777C6D]";
      break;
  }

  console.log(to);
  const onClick = () => {
    if (to === "") return;
    else {
      window.open(to, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={onClick}
      className={`relative rounded-xl overflow-hidden border border-black/20 hover:border-black/40 dark:border-white/20 hover:dark:border-white/40 bg-gray-400/10 dark:bg-gray-500/10 w-full sm:h-100 flex flex-col transition-all hover:scale-102 hover:overflow-y-scroll scrollbar-none hover:rounded-none group ${to && "cursor-pointer"}`}
    >
      <img src={coverUrl} alt={title} className="h-48 object-cover" />
      {to && (
        <div className="absolute top-3 right-3 flex bg-black/30 rounded-lg backdrop-blur-md text-white overflow-hidden group-hover:rounded-none">
          <ArrowUpRight className="absolute h-8 w-8 transition-all group-hover:-translate-x-8" />
          <ArrowUpRight className="h-8 w-8 transition-all translate-x-8 group-hover:translate-x-0" />
        </div>
      )}

      <div className="p-4 flex flex-col flex-1">
        <span className="font-light mt-auto text-sm text-black/70 dark:text-white/70">
          {createDate}
        </span>
        <h4 className="font-bold mt-2">{title}</h4>
        <p className="font-light">{description}</p>
        <div className="flex gap-2 mt-auto flex-wrap">
          <span className={statusStyle}>{status}</span>
          {tags.map((tag) => {
            return (
              <span className="py-1 px-2 rounded-xl text-xs font-bold bg-paper-reverse text-paper">
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
