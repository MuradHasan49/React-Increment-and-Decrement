import React from "react";
import { useState } from "react";

const First = () => {
  const [IncrementCount, setCount1] = useState(0);
  const [DecrementCount, setCount2] = useState(100);
  return (
    <>
    <div className="box">
      <div className="card">
        <div className="content">
          <button className="btn" onClick={() => setCount1((count) => count + 1)}>
            Increment count is : {IncrementCount}
          </button>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <button className="btn" onClick={() => setCount2((count) => count - 1)}>
            Increment count is : {DecrementCount}
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default First;
