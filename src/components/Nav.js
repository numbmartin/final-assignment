import React from "react";
import {Link} from "react-router-dom"


function Nav() {

    return(
        <>
        <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase" id="mainNav">
        <div className="container"><Link className="navbar-brand" to="/page-top">Brand</Link><button dataBsToggle="collapse" dataBsTarget="#navbarResponsive" className="navbar-toggler text-white bg-primary navbar-toggler-right text-uppercase rounded" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/portfolio">Portfolio</Link></li>
                    <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/about">About</Link></li>
                    <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>


        </>


    )
}


export default Nav 