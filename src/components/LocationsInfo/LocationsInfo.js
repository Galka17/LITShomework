import React from "react";
import { useParams } from "react-router-dom";
import LocationsArr from "../Locations/LocationsArr";

export default function LocationsInfo(props) {
  let { projectId } = useParams();
  return (
    <div className="locationsinfo">
      <h1>{LocationsArr[projectId - 1].title}</h1>
      <div className="infowrapper">
        <div className="img">
          <img src={LocationsArr[projectId - 1].img}></img>
          <img src={LocationsArr[projectId - 1].img2}></img>
        </div>
        <p>{LocationsArr[projectId - 1].text}</p>
      </div>
    </div>
  );
}
