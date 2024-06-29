import React, { useState } from "react";
const Count = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 className="text-primary">{counter}</h1>
      <div className="pt-3">
        <button>
          <button
            className="btn btn-primary"
            onClick={() => setCounter(counter - 1)}
          >
            {" "}
            Decrement
          </button>
          <button className="btn btn-danger" onClick={() => setCounter(0)}>
            {" "}
            Reset
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setCounter(counter + 1)}
          >
            {" "}
            Increment
          </button>
        </button>
      </div>
    </div>
  );
};
export default Count;
