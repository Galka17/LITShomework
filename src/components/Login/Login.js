import React from "react";
import MOCK_DATA from "../MOCK_DATA";

export default function Login() {
  return (
    <div className="wrapper">
      <div className="formwrapper">
        <h1>{MOCK_DATA.LOGIN.header}</h1>
        <form className="form">
          <div className="test">
            <i className="fa fa-caret-right">
          <input type="text" placeholder="username"></input>
          </i>
          </div>
          <div className="test">
            <i className="fa fa-caret-right">
          <input type="password" placeholder="password"></input>
          </i>
          </div>
          <button type="submit">{MOCK_DATA.LOGIN.button}</button>
        </form>
        <div className="socialicons">
          <a href="https://www.facebook.com" className="facebook">
            <i className="fa fa-facebook-f"></i>
          </a>

          <a href="https://www.instagram.com" className="instagram">
            <i className="fa fa-instagram"></i>
          </a>

          <a href="https://telegram.org/" className="telegram">
            <i className="fa fa-paper-plane"></i>
          </a>

          <a href="https://mail.google.com/" className="mail">
            <i className="fa fa-envelope"></i>
          </a>

          <a href="https://github.com/Galka17/LITShomework" target="_blank" className="git">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}