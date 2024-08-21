import React from "react";
import "../AboutSection/AboutSection.css";

function AboutEmployee({
  firstName,
  lastName,
  position,
  description,
  photo,
  isReverse,
  alignRight,
}) {
  const photoClass = position.toLowerCase().replace(/\s+/g, "-");

  const aboutClass = isReverse ? "about-container reverse" : "about-container";
  const textClass = alignRight ? "centered reversetext" : "centered";

  return (
    <div className={aboutClass}>
      <div
        className={`personal-photo ${photoClass}`}
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <div className={textClass}>
        <span className={`subtitle about-subtitle ${alignRight ? "reverse" : ""}`}>
          {firstName} {lastName} [{position}]
        </span>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AboutEmployee;
