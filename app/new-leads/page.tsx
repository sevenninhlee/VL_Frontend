import Sidebar from "components/Layouts/Sidebar";
import React from "react";
import NewLeads from "../../containers/NewLeads";

const NewLeadsPage = () => {
  return (
    <div className="flex h-screen max-h-screen  bg-vlocator_gray">
      <Sidebar />
       <NewLeads />
    </div>
  );
};

export default NewLeadsPage;
