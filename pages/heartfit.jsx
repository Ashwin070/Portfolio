import Image from "next/image";
import React from "react";
import heartImg from "../public/assets/projects/heart.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
const heartfit = () => {
  return (
    <div className="w-full ">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={heartImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">HeartFit</h2>
          <h3>HTML / CSS / JavaScript </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Heartfit is a website that can be used to predict if a user if
            suffering from a coronary heart disease. The website contains list
            of several heart diseases along with their symptomps, cures and the
            location to the best hospital for the respective heart diseases
            which has been integrated using Google Maps API. The website also
            has a BMI/ BMR form that helps people realise their fitness level or
            how to achieve them. Chatbot has also been integrated in the website
            for ease of user&apos;s appointment.
          </p>
          <Link href="https://heartfit-dsn.netlify.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/Ashwin070/HeartFit">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML 5
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Google Maps API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Chatbot API
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

export default heartfit;
