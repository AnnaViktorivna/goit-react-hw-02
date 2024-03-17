import css from "./Options.module.css";

const Options = ({ totalFeedback, handleResetFeedback, handleLogOptions }) => {
  return (
    <div>
      <button
        onClick={() => {
          handleLogOptions("good");
        }}
      >
        Good 🔥{" "}
      </button>
      <button
        onClick={() => {
          handleLogOptions("neutral");
        }}
      >
        Neutral 🙂{" "}
      </button>
      <button
        onClick={() => {
          handleLogOptions("bad");
        }}
      >
        Bad 👎{" "}
      </button>
      {totalFeedback !== 0 && (
        <button onClick={handleResetFeedback}>Reset 🔄 </button>
      )}
    </div>
  );
};

export default Options;
