import React from "react";
import Heading from "../Heading";
import { DevicesCardProps } from "@/types/types";
import { devicesData } from "@/data/data";

const Devices = () => {
  return (
    <div>
      <Heading
        title="We Provide you streaming experience across various devices."
        subtitle="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
      />

      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {devicesData.map(({ icon, title, content }, index) => (
          <div key={index}>
            <Card icon={icon} title={title} content={content} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Card = ({ icon: Icon, title, content }: DevicesCardProps) => {
  return (
    <div className=" space-y-6 p-12 rounded-xl border border-black-15 bg-gradient-to-tr bg-black-6 from-transparent from-50% to-primary/10  ">
      <div className=" flex items-center gap-6">
        <div className="p-5 bg-black-8 border border-black-12 rounded-lg">
          {<Icon className=" size-8 text-primary" />}
        </div>
        <h3 className=" font-semibold text-xl">{title}</h3>
      </div>
      <div>
        <p className=" text-gray-60 text-sm 2xl:text-base">{content}</p>
      </div>
    </div>
  );
};

export default Devices;
