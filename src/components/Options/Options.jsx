import css from "./Options.module.css";

const Options = ({ handleLogOptions }) => {
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
    </div>
  );
};

export default Options;
