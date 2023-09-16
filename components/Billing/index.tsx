"use client";
import { CardIcon, InvoiceIcon } from "assets/icons";
import { useState } from "react";

const Billing = () => {
  return (
    <div className=" flex flex-col w-full px-20 py-10 gap-6">
      <div className=" flex flex-col ml-2">
        <div className=" flex ">
          <div className=" flex items-center justify-between ">
            <CardIcon />
          </div>
          <span className=" text-vlocator_black font-bold text-sm py-2 ml-2 ">
            My Subscription
          </span>
        </div>
        <p className="text-xs font-medium text-vlocator_black-1">
          Manager your billing and payment details.
        </p>
      </div>
      <div className=" flex  gap-x-10 ">
        <div className="flex w-full border border-vlocator_black rounded-[20px] cursor-pointer bg-[#F5F5F5]  p-2 pl-5 pr-[15px]">
          <div className="flex justify-between w-full">
            <div className="flex flex-col mt-3">
              <p className=" font-medium text-sm">Hot Leads Program</p>
              <p className=" text-xs font-bold text-vlocator_gray-2">
                Free access pay as you go
              </p>
            </div>
            <div className="flex justify-center items-center">
              <span className=" font-medium">$0/month</span>
            </div>
          </div>
        </div>
        <div className="flex w-full border border-vlocator_black rounded-[20px] cursor-pointer bg-[#F5F5F5]  p-2 pl-5 pr-[15px]">
          <div className="flex justify-between w-full">
            <div className="flex flex-col mt-2">
              <p className=" font-medium text-sm">Payment method for leads</p>
              <div className=" flex ">
                <div className=" flex items-center justify-between ">
                  <CardIcon />
                </div>
                <span className=" text-vlocator_black font-bold text-xs py-2 ml-2 ">
                  Visa ending in 1234
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <span className=" text-vlocator_purple font-semibold text-xs select-none  hover:underline">
                Edit
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col ml-2 mt-1">
        <div className=" flex ">
          <div className=" flex items-center justify-between ">
            <InvoiceIcon />
          </div>
          <span className=" text-vlocator_black font-bold text-sm py-2 ml-2 ">
            Invoices
          </span>
        </div>
        <p className=" text-vlocator_purple font-bold text-xs select-none hover:underline">
          Open Portal To View Past Invoices
        </p>
      </div>
    </div>
  );
};
export default Billing;
