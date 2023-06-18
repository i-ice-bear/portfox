import NavbarComponent from "@/Components/Navbar";
import React from "react";

const RootPage = () => {
  return (
    <>
      <div>
        <NavbarComponent />
        <div className="container h-96" style={{height:"300vh"}}>
          Something
        </div>
      </div>
    </>
  );
};

export default RootPage;
