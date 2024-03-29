import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./components/Assets/_style.scss";
import "./components/Home/style.scss";
import "./components/Locations/style.scss";
import "./components/Login/style.scss";
import "./components/About/style.scss";
import "./components/LocationsInfo/style.scss";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
