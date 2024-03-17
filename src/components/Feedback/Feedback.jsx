import css from "./Feedback.module.css";

const Feedback = ({ positiveFeedback, feedback, totalFeedback }) => {
  return (
    <>
      {totalFeedback !== 0 && (
        <ul className={css.feedbackList}>
          <li className={css.feedbackListItem}>Good: {feedback.good}</li>
          <li className={css.feedbackListItem}>Neutral: {feedback.neutral}</li>
          <li className={css.feedbackListItem}>Bad: {feedback.bad}</li>
          <li className={css.feedbackListItem}>Total: {totalFeedback}</li>
          <li className={css.feedbackListItem}>
            Positive: {positiveFeedback}%
          </li>
        </ul>
      )}
    </>
  );
};

export default Feedback;
