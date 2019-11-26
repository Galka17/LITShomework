import React from "react";
import MOCK_DATA from "../MOCK_DATA";

export default function About() {
  return (
    <div className="aboutwrapper">
      <div className="aboutbody">
        <h1>{MOCK_DATA.ABOUT.header} </h1>
        <p>{MOCK_DATA.ABOUT.paragraph}</p>
        <p>{MOCK_DATA.ABOUT.paragraph2}</p>
        <p>{MOCK_DATA.ABOUT.paragraph3}</p>
        <p>{MOCK_DATA.ABOUT.paragraph4}</p>
      </div>
    </div>
  );
}
