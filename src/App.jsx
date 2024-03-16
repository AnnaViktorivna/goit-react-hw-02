import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleLogOptions = (options) => {
    console.log("options: ", options);
    setFeedback({ ...feedback, [options]: feedback[options] + 1 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options handleLogOptions={handleLogOptions} />
      <Feedback feedback={feedback} totalFeedback={totalFeedback} />
    </>
  );
}

export default App;
