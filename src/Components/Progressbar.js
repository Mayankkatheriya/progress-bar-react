import React, { useEffect, useState } from "react";

const Progressbar = ({ value, onComplete }) => {
  const [progress, setProgress] = useState(value);

  useEffect(() => {
    if (progress < 100) {
      setTimeout(() => {
        setProgress((val) => val + 1);
      }, 100);
    } else if (progress >= 100) {
      console.log("complete");
      onComplete();
    }
  }, [progress]);

  return (
    <div className="progress-container">
      <div className="progressbar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="progress-show">
        <span>
          {progress}%<p>Loading...</p>
        </span>
      </div>
    </div>
  );
};

export default Progressbar;
