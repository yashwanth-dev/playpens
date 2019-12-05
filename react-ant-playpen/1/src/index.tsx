import React from "react";
import ReactDOM from "react-dom";
import MainComponent from "./main";

const App: React.FC = () => {
  return (
    <div>
      <MainComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
