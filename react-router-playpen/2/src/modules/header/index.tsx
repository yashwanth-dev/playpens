import React from "react";
import { NavLink } from "react-router-dom";
const HeaderModuleComponent: React.FC = () => {
  return (
    <div>
      <h1>Header Module Component</h1>
      <nav>
        <NavLink to="/user/1">User</NavLink>
      </nav>
    </div>
  );
};
export default HeaderModuleComponent;
