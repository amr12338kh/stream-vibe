import React from "react";
import Heading from "../Heading";
import { DevicesCardProps } from "@/types/types";
import { devicesData } from "@/data/data";

const Devices = () => {
  return (
    <div>
      <Heading
        title="All Your Devices, One Platform"
        subtitle="Watch your favorite content anytime, anywhere. StreamVibe works seamlessly across all your devices."
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
