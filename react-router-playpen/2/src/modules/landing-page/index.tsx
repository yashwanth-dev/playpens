import React from "react";
import HeaderModuleComponent from "../header";
import NavigationModuleComponent from "../navigation";
import AppModuleComponent from "../app";
const LandingPageModuleComponent: React.FC = () => {
  console.log("LandingPageModuleComponent");
  return (
    <div>
      <h1>Landing Page Module</h1>
      <HeaderModuleComponent />
      <NavigationModuleComponent />
    </div>
  );
};
export default LandingPageModuleComponent;
