// Compound Components
// http://localhost:3000/isolated/exercise/02.js

/* OVERWRITE THE RESPECTIVE EXERCISE SOLUTIONS IN THIS FILE TO VIEW THE PAGE ON THE ABOVE ADDRESS*/
/* eg: COPY "02-exercise.js" FILE AND PASTE HERE TO LOAD ON THE ABOVE LOCALHOST ADDR */

import * as React from "react";
import { Switch } from "../switch";

function Toggle(props) {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  return React.Children.map(props.children, (child) => {
    if (typeof child.type === "string") {
      return child;
    }
    return React.cloneElement(child, { on, toggle });
  });
}

const ToggleOn = ({ on, children }) => {
  if (on) {
    return children;
  }
};

const ToggleOff = ({ on, children }) => {
  if (!on) {
    return children;
  }
};

const ToggleButton = ({ on, toggle }) => {
  return <Switch on={on} onClick={toggle} />;
};

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  );
}

export default App;

/*
eslint
  no-unused-vars: "off",
*/
