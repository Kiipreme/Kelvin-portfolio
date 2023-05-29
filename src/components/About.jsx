import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Hello! I'm Kelvin Garcia, a Full Stack Engineer who graduated from
          General Assembly with a strong commitment to continuous learning and
          skill enhancement. During my recent work experience, I held positions
          in both Retail and Warehouse settings, where I utilized various
          software applications to streamline daily operations. My
          inquisitiveness regarding the inner workings of these software
          solutions has fueled my desire to develop and design functional
          solutions that simplify everyday tasks. Acquiring the necessary skills
          and methodologies for creating and deploying polished products has
          heightened my passion and motivation as a Software Engineer. Equipped
          with my existing toolkit and an unwavering thirst for knowledge, my
          goal is to transform clients' ideas and products into tangible
          realities, providing both development and support throughout the
          process.
        </p>
      </div>
    </div>
  );
};

export default About;
