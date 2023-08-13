import React from "react";

export default function Results() {
  return (
    <div className="results grid-flow" data-spacing="large">
      <h1 className="result-title">Your Result</h1>

      <div className="result-score">
        <span>76</span> of 100
      </div>

      <div className="grid-flow">
        <p className="ranking-title">Great</p>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}
