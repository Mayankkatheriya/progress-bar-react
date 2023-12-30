import React from "react";

const LandingPage = ({ onClick }) => {
  return (
    <div className="landing">
      <h4>Haanji.. kya haal hai??😛</h4>
      <button onClick={onClick}>Reset</button>
    </div>
  );
};

export default LandingPage;
