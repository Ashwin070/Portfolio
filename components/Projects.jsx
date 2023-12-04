import Image from "next/image";
import React from "react";
import jotionImg from "../public/assets/projects/jotion.png";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import heartImg from "../public/assets/projects/heart.png";
import resumeImg from "../public/assets/projects/resume.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Jotion"
            backgroundImg={jotionImg}
            projectUrl="/jotion"
            tech="Next JS , Shad CN, Convex, Clerk"
          />
          <ProjectItem
            title="Heartfit"
            backgroundImg={heartImg}
            projectUrl="/heartfit"
            tech="HTML , CSS, JavaScript, Google Map API"
          />
          <ProjectItem
            title="Resume Builder"
            backgroundImg={resumeImg}
            projectUrl="/resumebuilder"
            tech="Next Js, Tailwind CSS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
