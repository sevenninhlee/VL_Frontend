"use client";
import React, { useState } from "react";
import {
  LocationIcon,
  LogoLgIcon,
  AreaIcon,
  CardIcon,
  AvatarSignUpIcon,
  UserCircleIcon,
} from "assets/icons";
import { LeadIcon } from "assets/icons";
import { Avatar, Popover } from "evergreen-ui";

const leadItems = [
  {
    title: "New Leads",
    icon: <LeadIcon width={16} height={16} />,
  },
  {
    title: "My Leads",
    icon: <LocationIcon width={16} height={16} />,
  },
];

const settingItems = [
  {
    title: "My Area",
    icon: <AreaIcon width={16} height={16} />,
  },
  {
    title: "My Subscription",
    icon: <CardIcon width={16} height={16} />,
  },
];

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className=" flex flex-col w-[200px] h-screen max-h-screen border-r-[1px]">
      <div className=" flex items-center justify-center border-b-[1px] p-12 h-10 ">
        <LogoLgIcon />
      </div>
      <div className="flex flex-col justify-between h-full ">
        <div className="flex flex-col gap-7 mt-8 px-4">
          <div className=" flex flex-col">
            <p className="text-vlocator_gray-1 font-bold text-[10px] pl-4 ">
              LEADS
            </p>
            <div className="flex flex-col gap-y-1 mt-4">
              {leadItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center hover:bg-vlocator_gray-4/30 select-none hover:cursor-pointer rounded-[80px] w-full h-8 px-4 ${
                    activeTab === item.title
                      ? "text-vlocator_purple"
                      : "text-vlocator_gray-2"
                  }`}
                  onClick={() => setActiveTab(item.title)}
                >
                  <div className="flex items-center justify-center w-4 h-4">
                    {item.icon}
                  </div>
                  <span className="ml-3 font-bold text-xs">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-vlocator_gray-1 font-bold text-[10px] pl-4 ">
              SETTINGS
            </p>
            <div className="flex flex-col gap-y-1 mt-4">
              {settingItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center hover:bg-vlocator_gray-4/30 hover:cursor-pointer rounded-[96px] w-full h-8 px-4 ${
                    activeTab === item.title
                      ? "text-vlocator_purple"
                      : "text-vlocator_gray-2"
                  }`}
                  onClick={() => setActiveTab(item.title)}
                >
                  <div className="flex items-center justify-center w-4 h-4">
                    {item.icon}
                  </div>
                  <span className="ml-3 font-bold text-xs">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Popover
          minWidth={150}
          statelessProps={{
            marginLeft: -8,
          }}
          position="top"
          content={
            <div className=" flex items-center justify-center text-xs font-bold text-vlocator_gray-2  hover:bg-vlocator_gray-4/30 hover:cursor-pointer py-3 select-none">
              Sign Out
            </div>
          }
        >
          <div className=" flex px-4 pb-8 ">
            <div className=" flex items-center px-3 gap-x-2  hover:bg-vlocator_gray-4/30 hover:cursor-pointer py-2 rounded-[80px] select-none">
              <div className="flex items-center justify-center w-8 h-8 ">
                <UserCircleIcon className=" text-vlocator_gray-2" />
              </div>
              <span className=" text-vlocator_gray-2 font-bold text-xs py-2 ">
                Michael Benson
              </span>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default Sidebar;
