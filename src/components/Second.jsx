import { useState } from "react";

const Second = () => {
  const [IncrementCount, setCount1] = useState(0);
  const [DecrementCount, setCount2] = useState(100);

  // Auto count from 1 → 100
  const handleIncrement = () => {
    let i = 1;
    const interval = setInterval(() => {
      setCount1(i);
      if (i === 100) clearInterval(interval);
      i++;
    }, 100);
  };

  // Auto count from 100 → 0
  const handleDecrement = () => {
    let i = 100;
    const interval = setInterval(() => {
      setCount2(i);
      if (i === 0) clearInterval(interval);
      i--;
    }, 100);
  };

  return (
    <div className="box2">
      <div className="card">
        <div className="content">
          <button className="btn" onClick={handleIncrement}>
            Get Count Up : {IncrementCount}
          </button>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <button className="btn" onClick={handleDecrement}>
            Count Down: {DecrementCount}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Second;
