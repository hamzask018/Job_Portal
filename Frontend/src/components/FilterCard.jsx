import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
const filterData = [
  {
    filterType: "location",
    array: ["Delhi NCR", "Banglore", "Hyderabad", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend developer", "Backend Developer", "Fullstack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "4-10lakh", "10-20lakh"],
  },
];

function FilterCard() {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.array.map((item, index) => {
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} />

                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default FilterCard;
