import React from "react";
import ProjectItem from "./ProjectItem";
import Cheers from "../public/assets/Projects/CheersCard.png";
import SideProjects from "../public/assets/Projects/SideProjectsCard.png";
import Pomodoro from '../public/assets/Projects/PomodoroCard.png'
  
const ProjectData = [
  {
    title: "Bar Finder",
    tech: "Next JS",
    bgImg: Cheers,
    projectURL: "/projects/BarFinder",
  },
  {
    title: "Project Hub",
    tech: "React JS",
    bgImg: SideProjects,
    projectURL: "/projects/Connect",
  },
  {
    title: "Pomodoro Timer",
    tech: "React JS",
    bgImg: Pomodoro,
    projectURL: "/projects/Pomodoro",
  },
];
export default function Projects() {
  return (
    <div id="projects" className="w-full pt-16">
      <div className="max-w-[1240px] mx-auto px-2 py-20">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {ProjectData.map((item, i) => {
            return (
              <ProjectItem
                key={i}
                title={item.title}
                tech={item.tech}
                bgImg={item.bgImg}
                projectURL={item.projectURL}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
