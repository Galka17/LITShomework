import React from "react";
import MOCK_DATA from "../MOCK_DATA";

export default function Login() {
  return (
    <div className="wrapper">
      <form className="form">
        <h1>{MOCK_DATA.LOGIN.header}</h1>
        <input type="text"></input>
        <br />
        <input type="password"></input>
        <br />
        <button type="submit">{MOCK_DATA.LOGIN.button}</button>
      </form>
    </div>
  );
}
