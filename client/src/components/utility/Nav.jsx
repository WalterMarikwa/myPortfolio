import React from 'react';
import '../styles/Nav.css';

function Nav() {
    return (
        <div className="navbar_nav">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/"><span style={{color: 'orangered'}}>Walter Marikwa</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Me</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <ul className="navbar-nav ml-auto nav-flex-icons">
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </span>
                </div>
            </nav>
        </div>
    );
}

export default Nav;