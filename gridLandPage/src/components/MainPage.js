import React from "react";
import DataExpert from "./DataExpert";
import FinanceExpert from "./FinanceExpert";
import Navbar from "./Navbar";
import SafetyExpert from "./SafetyExpert";
import SecurityExpert from "./SecurityExpert";
import SoftwareExpert from "./SoftwareExpert";

const MainPage = () => {
  return (
    <React.Fragment>
      <section className="md:w-2/3 md:mx-auto">
        <div className="text-white">
          <Navbar />
        </div>

        <div className="bg-blue-800 text-gray-300 md:grid md:grid-cols-4 ">
          <div className="col-span-2">
            <FinanceExpert />
          </div>
          <div className="col-start-3">
            <DataExpert />
          </div>
          <div className="col-start-1">
            <SoftwareExpert />
          </div>
          <div className="col-span-2">
            <SecurityExpert />
          </div>
          <div className="row-span-2 col-start-4 row-start-1">
            <SafetyExpert />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;
