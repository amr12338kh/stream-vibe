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
    <div className="flex items-center gap-4 bg-black-8 border border-black-15 p-3 sm:p-5 rounded-xl transition-all duration-300 hover:bg-black-6 group">
      <div className="w-[60px] h-[60px] flex items-center relative rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <img
          src={getImagePath(person.profile_path || "")}
          alt={person?.name || `${role} Name`}
          loading="lazy"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-10/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="space-y-1">
        <h3 className="text-base sm:text-lg font-semibold group-hover:text-white transition-colors duration-300">
          {person?.name}
        </h3>
        {birthPlace && (
          <span className="text-xs sm:text-sm text-gray-40 font-medium">
            {birthPlace}
          </span>
        )}
      </div>
    </div>
  </div>
);

export default PersonCard;
