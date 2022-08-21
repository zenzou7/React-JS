import React from "react";

const navbar = () =>{
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Eren Jägermeister</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Sin alcohol</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Vinos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Licores</a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )
    
}

export default navbar