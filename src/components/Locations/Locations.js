import React from "react";
import { Link, useRouteMatch } from 'react-router-dom';
import LocationsArr from './LocationsArr';
import MOCK_DATA from "../MOCK_DATA";

export default function Locations() {
    useRouteMatch();
    return (
        <div className="locationswrapper">
            <h1>{MOCK_DATA.LOCATIONS.header}</h1>

            <ul className="locationslist">
                {LocationsArr.map(item => (
                    <li>
                        <Link to={`/Locations/${item.id}`} type="button" className="button">
                            {item.title}
                        </Link>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}