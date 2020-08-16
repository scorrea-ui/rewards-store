import React from "react";

export const Hero = ({ title }) => {
  return (
    <div className="c-hero">
      <div className="o-container">
        <div className="o-grid">
          <h1 className="c-hero__title">{title}</h1>
        </div>
      </div>
    </div>
  );
};
