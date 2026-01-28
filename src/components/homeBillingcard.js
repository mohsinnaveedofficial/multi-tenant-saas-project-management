import React from "react";
import { Card, CardContent } from "./ui/card";
import { IoIosCheckmark } from "react-icons/io";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

function HomeBillingcard({ type, price, features, buttoncolor, popular }) {
  return (
    <Card
      className={`bg-white dark:bg-gray-800 font-sans w-76  min-h-[430px] shadow-xl relative mt-4 ${
        popular && "border-2 border-blue-600"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-[35%]">
          <Badge variant={"secondary"} className={"bg-blue-500 text-white "}>Most Popular</Badge>
        </div>
      )}
      <CardContent>
        <div className="text-center mb-8 mt-2">
          <h2 className="text-2xl text-gray-900 dark:text-gray-200 font-bold">{type}</h2>
          <h2 className="text-4xl my-1 text-gray-900 dark:text-gray-200 font-bold">${price}</h2>
          <h5 className="text-gray-600 dark:text-gray-400 mt-1">per month</h5>
        </div>
        <div className="space-y-4"> 

        {features.map((item, idx) => (
            <div className="flex items-center gap-1 " key={idx}>
            <IoIosCheckmark className="text-green-400 text-2xl" />
            <span className="text-gray-700 dark:text-gray-400">{item}</span>
          </div>
        ))}
        </div>
        <Button
          variant={"secondary"}
          className={`w-full mt-8 py-6 whitespace-nowrap font-semibold ${buttoncolor}`}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}

export default HomeBillingcard;
