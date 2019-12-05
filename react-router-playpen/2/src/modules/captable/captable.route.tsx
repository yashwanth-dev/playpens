import React from "react";
import DashboardComponent from "./dashboard";
import OwnershipComponent from "./ownership";
import { Route } from "react-router";
import TransactionsComponent from "./transactions";
const RouteComponent: React.FC = () => {
  return (
    <div>
      <Route path="/ownership" component={OwnershipComponent} />
      <Route path="/transactions" component={TransactionsComponent} />
      <Route path="/" component={DashboardComponent} />
    </div>
  );
};
export default RouteComponent;
