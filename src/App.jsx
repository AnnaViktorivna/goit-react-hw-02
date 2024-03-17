import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};
function App() {
  const [feedback, setFeedback] = useState(() => {
    const stringifiedFeedbacks = localStorage.getItem("feedbackValue");
    const parsedFeedback = JSON.parse(stringifiedFeedbacks) ?? initialFeedback;
    return parsedFeedback;
  });

  const handleLogOptions = (options) => {
    console.log("options: ", options);
    setFeedback({ ...feedback, [options]: feedback[options] + 1 });
  };
  const handleResetFeedback = () => {
    setFeedback(initialFeedback);
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    localStorage.setItem("feedbackValue", JSON.stringify(feedback));
  }, [feedback]);
  return (
    <>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        handleLogOptions={handleLogOptions}
        handleResetFeedback={handleResetFeedback}
      />
      <Notification totalFeedback={totalFeedback} />
      <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
    </>
  );
}

export default App;
