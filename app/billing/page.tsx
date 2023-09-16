import Sidebar from "components/Layouts/Sidebar";
import Billing from "components/Billing/index";
import React from "react";

const BillingPage = () => {
  return (
    <div className="flex h-screen max-h-screen  bg-vlocator_gray">
      <Sidebar />
      <Billing />
    </div>
  );
};

export default BillingPage;
