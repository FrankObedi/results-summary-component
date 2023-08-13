import React from "react";
import data from "../../data.json";
// import reaction from "../../assets/images/icon-reaction.svg";

export default function Summary() {
  return (
    <div className="summary grid-flow" data-spacing="large">
      <h2 className="summary-title">Summary</h2>
      <div className="grid-flow">
        {data.map((sumarryData) => {
          const { category, score, icon } = sumarryData;
          return (
            <div
              key={category.toLowerCase()}
              className="summery-category"
              data-category={category.toLowerCase()}
            >
              <div className="flex-left-group">
                <img src={icon} alt="Reaction summary category icon" />
                <p className="category-title">{category}</p>
              </div>

              <p className="category-score">
                <span>{score}</span>&nbsp; / 100
              </p>
            </div>
          );
        })}
      </div>
      <button className="cta-btn">Continue</button>
    </div>
  );
}
