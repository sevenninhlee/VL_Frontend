"use client";
import { LeadIcon } from "assets/icons";
import { useState } from "react";

const itemsColor = [
  {
    title: "Doylestown, PA",
    mode: "Gym",
    day: "2 days ago",
    price: "49$",

    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Philadelphia, PA",
    mode: "Hospital",
    day: "2 days ago",
    price: "49$",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const NewLeads = () => {
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
  console.log(showDescLeads);

  return (
    <div className=" flex flex-col w-full px-28 py-10 gap-y-3">
      <div className=" flex ">
        <div className=" flex items-center justify-between">
          <LeadIcon />
        </div>
        <span className=" text-vlocator_black font-bold text-sm py-2 ml-2 ">
          New Leads - Unclaimed
        </span>
      </div>
      <div className=" flex flex-col gap-y-5">
        {itemsColor.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-full gap-y-3 border border-vlocator_black rounded-[20px] cursor-pointer bg-[#F5F5F5] py-2 pl-5 pr-[15px]"
            onClick={() => {
              handleClickItem(item);
            }}
          >
            <div className="flex justify-between w-full">
              <div className="flex">
                <div className=" flex items-center justify-center">
                  <span className="w-2 select-none">
                    {showDescLeads.includes(item) ? "-" : "+"}
                  </span>
                </div>
                <span className="text-vlocator_black font-bold ml-2">
                  {item.title}
                </span>
                <span className=" ml-[57px] text-vlocator_black font-bold">
                  Gym
                </span>
              </div>
              <div className="flex justify-evenly gap-x-4">
                <span className=" font-medium">{item.day}</span>
                <span className="text-vlocator_black font-bold">
                  {item.price}
                </span>
                <div className="rounded-[80px] select-none text-white bg-vlocator_green w-[84px] text-xs p-1 font-medium flex justify-center">
                  Claim Lead
                </div>
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
  );
};
export default NewLeads;
