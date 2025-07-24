"use client";

import React from "react";
import Heading from "../Heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { featuresData } from "@/data/data";
import { Badge } from "../ui/badge";
import { getFeatureValue } from "@/lib/helpers";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Button } from "../ui/button";

type PlanProps = "basic" | "standard" | "premium";

const Features = () => {
  const [plan, setPlan] = useLocalStorage<PlanProps>("plan", "standard");

  const features = [
    "Price",
    "Content",
    "Devices",
    "Free Trial",
    "Cancel Anytime",
    "HDR",
    "Dolby Atmos",
    "Ad - Free",
    "Offline Viewing",
    "Family Sharing",
  ];

  return (
    <div>
      <Heading
        title="Compare our plans and find the right one for you"
        subtitle="StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
      />

      <div className="hidden md:block rounded-xl overflow-hidden border border-black-15">
        <Table>
          <TableHeader>
            <TableRow className="border-b bg-black-6 border-black-15 hover:bg-black-6">
              <TableHead className="text-white font-medium w-1/4 text-base lg:text-lg xl:text-xl border-r border-black-15">
                Features
              </TableHead>
              <TableHead className="text-white font-medium w-1/4 text-base lg:text-lg xl:text-xl border-r border-black-15">
                Basic
              </TableHead>
              <TableHead className="text-white font-medium w-1/4 text-base lg:text-lg xl:text-xl flex items-center gap-2">
                Standard
                <Badge className="bg-primary text-xs! text-white rounded">
                  Popular
                </Badge>
              </TableHead>
              <TableHead className="text-white font-medium w-1/4 text-base lg:text-lg xl:text-xl border-l border-black-15">
                Premium
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature, index) => (
              <TableRow
                key={index}
                className="border-b border-black-15 hover:bg-transparent h-20"
              >
                <TableCell className="font-medium text-gray-60 text-sm lg:text-base xl:text-lg border-r border-black-15">
                  {feature}
                </TableCell>
                <TableCell className="font-medium text-gray-60 text-sm lg:text-base xl:text-lg border-r border-black-15">
                  {getFeatureValue("Basic", feature, featuresData)}
                </TableCell>
                <TableCell className="font-medium text-gray-60 text-sm lg:text-base xl:text-lg border-r border-black-15">
                  {getFeatureValue("Standard", feature, featuresData)}
                </TableCell>
                <TableCell className="font-medium text-gray-60 text-sm lg:text-base xl:text-lg">
                  {getFeatureValue("Premium", feature, featuresData)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="md:hidden space-y-5">
        <div className="bg-black-6 border border-black-15 p-2 rounded-lg flex items-center gap-1 justify-center">
          <Button
            variant="secondary"
            className={`font-medium ${
              plan !== "basic" && "bg-black-6 text-gray-60"
            }`}
            onClick={() => setPlan("basic")}
          >
            Basic
          </Button>
          <Button
            onClick={() => setPlan("standard")}
            variant="secondary"
            className={`font-medium ${
              plan !== "standard" && "bg-black-6 text-gray-60"
            }`}
          >
            Standard
          </Button>
          <Button
            onClick={() => setPlan("premium")}
            variant="secondary"
            className={`font-medium ${
              plan !== "premium" && "bg-black-6 text-gray-60"
            }`}
          >
            Premium
          </Button>
        </div>

        <div className=" bg-black-6 border border-black-15 rounded-xl p-8">
          {featuresData.map((planFeatures, index) => {
            const {
              price,
              free_trail,
              content,
              devices,
              cancel_anytime,
              hdr,
              dolby_atmos,
              ad_free,
              offline_viewing,
              family_sharing,
            } = planFeatures;
            return (
              planFeatures.plan.toLowerCase() === plan.toLowerCase() && (
                <div key={index} className="flex flex-col gap-y-5">
                  <div className=" grid grid-cols-2">
                    <div>
                      <h3 className="text-gray-60 text-sm font-medium mb-1">
                        Price
                      </h3>
                      <p className="text-sm text-gray-95 font-medium">
                        ${price}/Month
                      </p>
                    </div>
                    <div>
                      <h3 className="text-gray-60 text-sm font-medium mb-1">
                        Free Trail
                      </h3>
                      <p className="text-sm text-gray-95 font-medium">
                        {free_trail} Days
                      </p>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-y-5">
                    <div>
                      <h3 className="text-gray-60 text-sm font-medium mb-1">
                        Content
                      </h3>
                      <p className="text-sm text-gray-95 font-medium sm:max-w-lg">
                        {content}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-gray-60 text-sm font-medium mb-1">
                        Devices
                      </h3>
                      <p className="text-sm text-gray-95 font-medium">
                        {devices}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-5">
                    <div>
                      <h3 className="text-gray-60 text-sm font-medium mb-1">
                        Cancel Anytime
                      </h3>
                      <p className="text-sm text-gray-95 font-medium">
                        {cancel_anytime ? "Yes" : "No"}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-gray-60 text-sm font-medium mb-1">
                        HDR
                      </h3>
                      <p className="text-sm text-gray-95 font-medium">
                        {hdr ? "Yes" : "No"}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-gray-60 text-sm font-medium mb-1">
                        Dolby Atmos
                      </h3>
                      <p className="text-sm text-gray-95 font-medium">
                        {dolby_atmos ? "Yes" : "No"}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-gray-60 text-sm font-medium mb-1">
                        Ad - Free
                      </h3>
                      <p className="text-sm text-gray-95 font-medium">
                        {ad_free ? "Yes" : "No"}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-gray-60 text-sm font-medium mb-1">
                        Offline Viewing
                      </h3>
                      <p className="text-sm text-gray-95 font-medium">
                        {typeof offline_viewing === "string"
                          ? offline_viewing
                          : offline_viewing
                            ? "Yes"
                            : "No"}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-gray-60 text-sm font-medium mb-1">
                        Family Sharing
                      </h3>
                      <p className="text-sm text-gray-95 font-medium">
                        {typeof family_sharing === "string"
                          ? family_sharing
                          : family_sharing
                            ? "Yes"
                            : "No"}
                      </p>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
