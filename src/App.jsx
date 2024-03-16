import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  // const [count, setCount] = useState(0);
  // const handleClick = (e) => {
  //   console.log(new Date().toLocaleDateString());
  // };
  // const handleLogClick = (myNumber) => {
  //   console.log("myNumber: ", myNumber);
  // };
  return (
    <>
      <Description />
      <Options />
      <Feedback />
    </>

    // <>
    //   <button onClick={handleClick}>Click Me</button>
    //   <button
    //     onClick={() => {
    //       handleLogClick(1);
    //     }}
    //   >
    //     Click to log my number: 1
    //   </button>
    // </>
  );
}

export default App;
