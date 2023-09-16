"use client";
import { AreaIcon } from "assets/icons";
import { EditIcon } from "evergreen-ui";
import { useState } from "react";
import ChangeAddressPopup from "../../containers/MyArea/ChangeAddressPopup";

const MyArea = () => {
  const [showChangeAddressPopup, setShowChangeAddresssPopup] = useState(false);

  const onShowAddressPopup = () => {
    setShowChangeAddresssPopup(true);
  };

  const onCloseAddressPopup = () => {
    setShowChangeAddresssPopup(false);
  };

  return (
    <div className=" flex flex-col w-full py-11 px-80 gap-y-2">
      <div className=" flex ">
        <div className=" flex items-center justify-between ">
          <AreaIcon />
        </div>
        <span className=" text-vlocator_black font-bold text-sm  ml-2 mt-1 ">
          My Area
        </span>
        <div
          className=" flex items-center justify-between ml-2 mt-1 cursor-pointer"
          onClick={onShowAddressPopup}
        >
          <EditIcon />
        </div>
      </div>
      <div className="flex w-full">
        <p className=" text-xs  text-vlocator_black-1 font-medium">
          We will show you new leads 50 miles around
          <strong className="text-[#6735FC] font-bold text-xs ml-1 underline">
            123 Smith Street, New York NY 10075
          </strong>
        </p>
        <div
          className=" flex items-center justify-between ml-2 cursor-pointer"
          onClick={onShowAddressPopup}
        >
          <EditIcon />
        </div>
      </div>
      <ChangeAddressPopup
        open={showChangeAddressPopup}
        onClose={onCloseAddressPopup}
      />
    </div>
  );
};
export default MyArea;
