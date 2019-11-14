import React from "react";
import { useParams } from "react-router-dom";
import LocationsArr from "./LocationsArr";

export default function LocationsInfo(props) {
  let { projectId } = useParams();
  return (
    <div>
      <h1>{LocationsArr[projectId - 1].title}</h1>
      <img src={LocationsArr[projectId - 1].img}></img>
      <img src={LocationsArr[projectId - 1].img2}></img>
      <p>{LocationsArr[projectId - 1].text}</p>
    </div>
  );
}
