import React from "react";
import AllConvertList from "./AllConvertList/AllConvertList";
import EditList from "./EditList/EditList";
import SecurityList from "./SecurityList/SecurityList";
import OrganizeList from "./OrganizeList/OrganizeList";
import OptimizeList from "./OptimizeList/OptimizeList";

const AllToolsList = () => {
  return (
    <>
      {/* Organize List */}
      <OrganizeList />

      {/* Optimize List */}
      <OptimizeList />

      {/* Convert list */}
      <AllConvertList />

      {/* Edit List */}
      <EditList />

      {/* PDF security list */}
      <SecurityList />
    </>
  );
};

export default AllToolsList;
