import React from "react";
import {Link} from "react-router-dom"


function Stories() {

    return(
        <>
        <section id="portfolio" className="portfolio">
        <div className="container">
            <h2 className="text-uppercase text-center text-secondary">Stories</h2>
            <hr className="star-dark mb-5"></hr>
            <div className="row">
                <div className="col-md-6 col-lg-4"><Link className="d-block mx-auto portfolio-item" to="/portfolio-modal-1" dataBsToggle="modal">
                        <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                            <div className="text-center text-white my-auto portfolio-item-caption-content w-100"><i className="fa fa-search-plus fa-3x"></i></div>
                        </div><img className="img-fluid" src="assets/img/portfolio/cabin.png" alt=""></img>
                    </Link></div>
                <div className="col-md-6 col-lg-4"><Link className="d-block mx-auto portfolio-item" to="/portfolio-modal-2" dataBsToggle="modal">
                        <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                            <div className="text-center text-white my-auto portfolio-item-caption-content w-100"><i className="fa fa-search-plus fa-3x"></i></div>
                        </div><img className="img-fluid" src="assets/img/portfolio/cake.png" alt=""></img>
                    </Link></div>
                <div className="col-md-6 col-lg-4"><Link className="d-block mx-auto portfolio-item" to="/portfolio-modal-3" dataBsToggle="modal">
                        <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                            <div className="text-center text-white my-auto portfolio-item-caption-content w-100"><i className="fa fa-search-plus fa-3x"></i></div>
                        </div><img className="img-fluid" src="assets/img/portfolio/circus.png" alt=""></img>
                    </Link></div>
                <div className="col-md-6 col-lg-4"><Link className="d-block mx-auto portfolio-item" to="/portfolio-modal-4" dataBsToggle="modal">
                        <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                            <div className="text-center text-white my-auto portfolio-item-caption-content w-100"><i className="fa fa-search-plus fa-3x"></i></div>
                        </div><img className="img-fluid" src="assets/img/portfolio/game.png" alt=""></img>
                    </Link></div>
                <div className="col-md-6 col-lg-4"><Link className="d-block mx-auto portfolio-item" to="/portfolio-modal-5" dataBsToggle="modal">
                        <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                            <div className="text-center text-white my-auto portfolio-item-caption-content w-100"><i className="fa fa-search-plus fa-3x"></i></div>
                        </div><img className="img-fluid" src="assets/img/portfolio/safe.png" alt=""></img>
                    </Link></div>
                <div className="col-md-6 col-lg-4"><Link className="d-block mx-auto portfolio-item" to="/portfolio-modal-6" dataBsToggle="modal">
                        <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                            <div className="text-center text-white my-auto portfolio-item-caption-content w-100"><i className="fa fa-search-plus fa-3x"></i></div>
                        </div><img className="img-fluid" src="assets/img/portfolio/submarine.png" alt=""></img>
                    </Link></div>
            </div>
        </div>
    </section>


        </>


    )
}


export default Stories 