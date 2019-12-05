import React from "react";
import { NavLink } from "react-router-dom";
const NavigationModuleComponent: React.FC = () => {
  return (
    <div>
      <h1>Navigation Module Component</h1>
      <nav>
        <NavLink to="/1/holdings/2">Captable</NavLink>
        <NavLink to="/1/holdings/2/ownership">Ownership</NavLink>
        <NavLink to="/1/holdings/2/transactions">Transactions</NavLink>
      </nav>
    </div>
  );
};
export default NavigationModuleComponent;
