import Image from "next/image";
import React from "react";
import resumeImg from "../public/assets/projects/resume.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
const resumebuilder = () => {
  return (
    <div className="w-full ">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={resumeImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Resume Builder</h2>
          <h3>Next JS / Tailwind CSS / Node JS </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Resume Builder is a web based site that helps people to create a
            resume. The website contains several templates of resume based on
            various professions such as engineering, doctor etc so that
            it&apos;s easy for users to select the resume and build it
            accordingly
          </p>
          <Link href="https://resumebuilder5.godaddysites.com/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/Ashwin070">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Node JS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default resumebuilder;
