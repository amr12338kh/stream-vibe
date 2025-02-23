/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CrewMember } from "../../types/types";
import { HeadingTitle } from "../ui/title";
import { getImagePath } from "@/lib/helpers";

const PersonCard = ({
  person,
  role,
  birthPlace,
}: {
  person: CrewMember;
  role: string;
  birthPlace?: string;
}) => (
  <div className="space-y-4">
    <HeadingTitle title={role} />
    <div className="flex items-center gap-4 bg-black-8 border border-black-15 p-2 sm:p-4 rounded-xl">
      <div className="w-[60px] h-[60px] flex items-center relative rounded-lg overflow-hidden">
        <img
          src={getImagePath(person.profile_path || "")}
          alt={person?.name || `${role} Name`}
          loading="lazy"
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="text-base sm:text-lg">{person?.name}</h3>
        {birthPlace && (
          <span className="text-xs sm:text-sm text-gray-60">{birthPlace}</span>
        )}
      </div>
    </div>
  </div>
);

export default PersonCard;
