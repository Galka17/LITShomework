import React from "react";
import MOCK_DATA from "../MOCK_DATA";

export default function Home() {
  return (
    <div className="maindiv">
      <body className="body">
        <h1>{MOCK_DATA.HOME.header}</h1>
        <p>{MOCK_DATA.HOME.paragraph} </p>

      </body>
      <footer className="footer">
        <div>footer here</div>
      </footer>
    </div>
  );
}
