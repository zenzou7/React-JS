import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const navbar = () =>{
    return (
        <div>
            <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to={"/"}><p className="navbar-brand" href="#">Eren Jägermeister</p></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                    <Link to={'/category/2'}><p className="nav-link">Sin alcohol</p></Link>
                    </li>
                    <li className="nav-item">
                    <Link to={'/category/4'}><p className="nav-link">Vinos</p></Link>
                    </li>
                    <li className="nav-item">
                    <Link to={'/category/3'}><p className="nav-link">Licores</p></Link>
                    </li>
                </ul>
                </div>
                <CartWidget></CartWidget>
            </nav>
        </div>
    )
    
}

export default navbar