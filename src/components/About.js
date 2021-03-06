import React from "react";
import {Link} from "react-router-dom"


function About() {

    return(
        <>
        <section className="text-white bg-primary mb-0" id="about">
        <div className="container">
            <h2 className="text-uppercase text-center text-white">About</h2>
            <hr className="star-light mb-5"></hr>
            <div className="row">
                <div className="col-lg-4 ms-auto">
                    <p className="lead">Freelancer is a free bootstrap theme. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
                </div>
                <div className="col-lg-4 me-auto">
                    <p className="lead">Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
                </div>
            </div>
            <div className="text-center mt-4"><Link className="btn btn-outline-light btn-xl" role="button" to="/"><i className="fa fa-download me-2"></i><span>Download Now!</span></Link></div>
        </div>
    </section>
        


        </>


    )
}


export default About 