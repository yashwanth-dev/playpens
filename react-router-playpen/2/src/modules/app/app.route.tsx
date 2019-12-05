import React from "react";
import DashboardModuleComponent from "../dashboard";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import UserModuleComponent from "../user";
import CaptableModuleComponent from "../captable";
import LandingPageModuleComponent from "../landing-page";
import { createBrowserHistory } from "history";

const AppRouteComponent: React.FC = () => {
  console.log("AppRouteComponent");

  return (
    <Router>
      <Route path="/" component={LandingPageModuleComponent} />
      <Route
        path="/:accountId/holdings/:subaccountId"
        component={CaptableModuleComponent}
      />
      <Route exact path="/:accountId" component={DashboardModuleComponent} />
      <Route path="/user/:id" component={UserModuleComponent} />
    </Router>
  );
};
export default AppRouteComponent;
