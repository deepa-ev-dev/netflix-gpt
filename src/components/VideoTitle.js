import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full md:w-screen aspect-video pt-[24%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      <p className="py-4 md:py-6 text-base md:text-md lg:text-lg md:w-1/2">{overview}</p>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
        <button className="bg-white text-black px-2 hover:bg-opacity-50 md:px-6 py-2 text-sm md:text-md lg:text-lg rounded">
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>
        <button className="rounded bg-gray-600 hover:bg-opacity-75 px-2 md:px-6 py-2 text-sm md:text-md lg:text-lg text-white">
        <span className="text-sm md:text-md lg:text-lg">ⓘ</span> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
