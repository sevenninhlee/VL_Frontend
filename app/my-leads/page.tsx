import Sidebar from "components/Layouts/Sidebar";
import MyLeads from "components/containers/MyLeads";
import React from "react";

const MyLeadsPage = () => {
  return (
    <div className="flex h-screen max-h-screen  bg-vlocator_gray">
      <Sidebar />
      <MyLeads /> 
    </div>
  );
};

export default MyLeadsPage;
