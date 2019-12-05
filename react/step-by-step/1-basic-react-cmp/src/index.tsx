import React from "react";
import ReactDOM from "react-dom";
const App: React.FC = () => {
  return (
    <div>
      <h1>This is a basic react component</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
