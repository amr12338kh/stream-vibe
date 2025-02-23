/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getFlagUrl } from "@/lib/helpers";
import countries from "@/data/countries.json";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const CountrySelect = ({
  selectedCountry,
  onCountryChange,
}: {
  selectedCountry: string;
  onCountryChange: (value: string) => void;
}) => (
  <Select name="phone" value={selectedCountry} onValueChange={onCountryChange}>
    <SelectTrigger className="h-12 sm:h-14 gap-2 w-auto bg-black-8 border-black-15">
      <div className="max-w-[20px] max-h-[20px]">
        <img
          src={getFlagUrl(selectedCountry)}
          alt=""
          className="object-cover"
        />
      </div>
    </SelectTrigger>
    <SelectContent>
      {countries.map(({ isoCode, dialCode, name }) => (
        <SelectItem key={`${isoCode}-${dialCode}`} value={isoCode}>
          <div className="flex items-center gap-2">
            <div className="max-w-[20px] max-h-[20px]">
              <img
                src={getFlagUrl(isoCode)}
                alt={name}
                className="object-cover"
              />
            </div>
            <span>{dialCode}</span>
          </div>
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export default CountrySelect;
