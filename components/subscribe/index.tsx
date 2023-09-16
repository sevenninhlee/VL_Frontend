"use client";
import { LogoSmIcon } from "assets/icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

const itemsAsk = [
  {
    title: "Why do you ask for a card?",
    description:
      "No hot leads in your area right now! When one is available we will email you. Generally we get between 0 and 15 hot leads per month in your area.",
  },
  {
    title: "What is included in the Hot Lead Access plan?",
    description:
      "No hot leads in your area right now! When one is available we will email you. Generally we get between 0 and 15 hot leads per month in your area.",
  },
  {
    title:
      "Do I have to pay for every lead in my area? Can I pick and choose leads?",
    description:
      "No hot leads in your area right now! When one is available we will email you. Generally we get between 0 and 15 hot leads per month in your area.",
  },
  {
    title: "How do you get these leads? How do you know they are hot?",
    description:
      "No hot leads in your area right now! When one is available we will email you. Generally we get between 0 and 15 hot leads per month in your area.",
  },
  {
    title: "What happens if the lead doesn’t close?",
    description:
      "No hot leads in your area right now! When one is available we will email you. Generally we get between 0 and 15 hot leads per month in your area.",
  },
  {
    title: "When am I charged?",
    description:
      "No hot leads in your area right now! When one is available we will email you. Generally we get between 0 and 15 hot leads per month in your area.",
  },
  {
    title: "What is included in the Hot Lead Access plan?",
    description:
      "No hot leads in your area right now! When one is available we will email you. Generally we get between 0 and 15 hot leads per month in your area.",
  },
  {
    title: "How many other vending companies am I competing in my area?",
    description:
      "No hot leads in your area right now! When one is available we will email you. Generally we get between 0 and 15 hot leads per month in your area.",
  },
];

const Subscribe = () => {
  const [showDescLeads, setShowDescLeads] = useState<any>([]);

  const handleClickItem = (item: any) => {
    if (!item.description) return;
    if (showDescLeads.includes(item)) {
      const newShowDescLeads = showDescLeads.filter(
        (show: any) => show !== item
      );
      setShowDescLeads(newShowDescLeads);
    } else setShowDescLeads((prev: any) => [...prev, item]);
  };
  return (
    <div className=" flex flex-col w-full h-screen max-h-screen bg-vlocator_gray">
      <div className="flex items-center justify-between px-7 py-5">
        <div className="flex items-center justify-center">
          <LogoSmIcon />
        </div>
        <div className="flex items-center">
          <p className="text-right text-xs text-vlocator_black-1">
            Already have an account?{" "}
            <span
              className="text-vlocator_purple hover:underline hover:cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
      <div className=" flex flex-col px-80">
        <div className="flex flex-col w-full py-8 gap-y-5">
          <h2 className=" text-center font-bold text-[15px]">
            You’re in! Let’s get started...
          </h2>
          <div className="flex w-full gap-x-5  border-vlocator_black shadow-lg cursor-pointer bg-[#fff] py-4 pl-5 pr-[15px] border-t-[2px]">
            <div className=" flex flex-col w-full text-xs">
              <p className=" border-vlocator_black border-b-[1px] text-[15px] text-vlocator_black-1 font-bold py-2">
                Hot Leads Access
              </p>
              <div className="flex justify-between w-full  border-vlocator_black border-b-[1px] py-2">
                <span className=" text-vlocator_black-1 font-medium">
                  Platform Access
                </span>
                <span className="">$0/month</span>
              </div>
              <div className="flex justify-between w-full  border-vlocator_black border-b-[1px] py-2">
                <span className=" text-vlocator_black-1 font-medium ">
                  *Hot Leads
                </span>
                <span className="">$49/lead (optional)</span>
              </div>
              <p className=" py-2">
                *You can review each hot lead before accepting it
              </p>
            </div>
            <div className=" flex flex-col w-full"></div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-y-6">
          <h2 className=" text-center font-bold text-[15px]">FAQs</h2>
          <div className=" flex flex-col shadow-lg bg-[#fff]">
            {itemsAsk.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col w-full  border ${
                  index !== 0 && "border-t-0"
                } border-vlocator_black-2 cursor-pointer bg-[#F5F5F5] py-2 pl-5 pr-[15px]`}
                onClick={() => {
                  handleClickItem(item);
                }}
              >
                <div className="flex w-full">
                  <div className="flex">
                    <div className="flex items-center justify-center">
                      <span className="w-2 select-none">
                        {showDescLeads.includes(item) ? "-" : "+"}
                      </span>
                    </div>
                    <span className="text-vlocator_black-2 font-medium ml-2 select-none text-xs mt-1">
                      {item.title}
                    </span>
                  </div>
                </div>
                {item.description && showDescLeads.includes(item) && (
                  <p className="text-xs text-vlocator_black-1">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
