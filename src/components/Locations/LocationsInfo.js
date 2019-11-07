import React from 'react';
import { useParams } from 'react-router-dom';
import LocationsArr from './LocationsArr';

export default function LocationsInfo(props) {
    let {projectId} = useParams();
    return <h1>{ LocationsArr[projectId - 1].title}</h1>
}