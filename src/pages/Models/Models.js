import React from "react";
import './Models.css';
import { Outlet, Link } from "react-router-dom";


const Models = () => {

    return (<>
        <div className="models-container">
            <h2> Models(Nested Routes) </h2>
            <div className="models-nav">
                <div className="models-nav-link-container">
                    <Link to="/models/gallery">Models Gallery</Link>
                    <Link to="/models/locations">Models Locations</Link>
                </div>
            </div>
        </div>
        <Outlet />
    </>);
}

export default Models;