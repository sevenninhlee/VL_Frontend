import Sidebar from "components/Layouts/Sidebar";
import MyArea from "components/My-area/index";
import React from "react";

const MyAreaPage = () => {
  return (
    <div className="flex h-screen max-h-screen  bg-vlocator_gray">
      <Sidebar />
      <MyArea />
    </div>
  );
};

export default MyAreaPage;
