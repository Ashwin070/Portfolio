import Image from "next/image";
import React from "react";
import jotionImg from "../public/assets/projects/jotion.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
const jotion = () => {
  return (
    <div className="w-full ">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={jotionImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Jotion</h2>
          <h3>Next JS / Tailwind / Clerk / Convex</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Jotion is a web based site that can be used to take notes. The
            website contains an Authorization using clerk to sign-up/ login
            using your github account. Convex is used to store the databse of
            the users. The users can create several notes in this website and
            also publish them and share the published notes with the people. The
            website also contains light/ dark theme for user comfort and ease of
            interaction.
          </p>
          <Link href="https://jotion-ten-ecru.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/Ashwin070/jotion">
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
                Clerk Authorization
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ShadCN Ui
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Convex
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
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

export default jotion;
