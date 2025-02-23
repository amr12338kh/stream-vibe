"use client";

import { PricingDataProps } from "@/types/types";
import Heading from "../Heading";
import { Button } from "../ui/button";
import { pricingData } from "@/data/data";
import usePageWidth from "@/hooks/usePageWidth";
import useLocalStorage from "@/hooks/useLocalStorage";

type PriceProps = "monthly" | "yearly";

const Pricing = ({ isHome }: { isHome?: boolean }) => {
  const [plan, setPlan] = useLocalStorage<PriceProps>(
    isHome ? "pricePlan" : "subscriptionPricePlan",
    "monthly"
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between heading-mb">
        <Heading
          className="md:!mb-0"
          title="Choose the plan that's right for you"
          subtitle="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        />

        <div className="bg-black-6 border border-black-15 p-2 rounded-lg flex items-center gap-1">
          <Button
            variant="secondary"
            className={`font-medium ${
              plan === "yearly" && "bg-black-6 text-gray-60"
            }`}
            onClick={() => setPlan("monthly")}
          >
            Monthly
          </Button>
          <Button
            onClick={() => setPlan("yearly")}
            variant="secondary"
            className={`font-medium ${
              plan === "monthly" && "bg-black-6 text-gray-60"
            }`}
          >
            Yearly
          </Button>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-6 xl:gap-8">
        {pricingData.map(
          ({ title, description, monthly_price, yearly_price }, index) => (
            <div key={index}>
              <Card
                title={title}
                description={description}
                monthly_price={monthly_price}
                yearly_price={yearly_price}
                plan={plan}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

const Card = ({
  title,
  description,
  monthly_price,
  yearly_price,
  plan,
}: PricingDataProps & { plan: "monthly" | "yearly" }) => {
  const pageWidth = usePageWidth();

  return (
    <div className="p-6 sm:p-8 md:p-14 lg:p-8 xl:p-12 space-y-6 md:space-y-10 lg:space-y-6 xl:space-y-10 rounded-xl bg-black-10 border border-black-15">
      <div className=" space-y-3 md:space-y-4 lg:space-y-3 xl:space-y-4">
        <h3 className=" font-bold text-2xl md:text-3xl lg:text-2xl">{title}</h3>
        <p className="text-gray-60 text-sm sm:text-lg md:text-xl lg:text-xs xl:text-base 2xl:text-[18px]">
          {description}
        </p>
      </div>
      <div className="flex gap-[2px]">
        <h5 className=" font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-4xl transition-all">
          ${plan === "monthly" ? monthly_price : yearly_price}
        </h5>
        <span className="text-gray-60 flex items-end">
          /{plan === "monthly" ? "month" : "year"}
        </span>
      </div>
      <div className="flex min-w-[330px]:justify-center items-center gap-2 md:gap-5 lg:gap-2 xl:gap-4 max-[330px]:flex-wrap">
        <Button
          size={pageWidth < 1280 ? "default" : "lg"}
          variant="secondary"
          className="basis-1/2 bg-black-8 border border-black-15 xl:py-6"
        >
          Start Free Trial
        </Button>
        <Button
          size={pageWidth < 1280 ? "default" : "lg"}
          className="basis-1/2 xl:py-6"
        >
          Choose Plan
        </Button>
      </div>
    </div>
  );
};

export default Pricing;
