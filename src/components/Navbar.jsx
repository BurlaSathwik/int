import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a
                        href="/"
                        className="title"
                    >
                        Title 
                    </a>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link
                                to="/"
                                className="nav-link px-2 text-secondary"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 text-white">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 text-white">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <Link to="/contactus" className="nav-link px-2 text-white">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/aboutus" className="nav-link px-2 text-white">
                                About Us
                            </Link>
                        </li>
                    </ul>
                    <form
                        className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                        role="search"
                    >
                        <input
                            type="search"
                            className="form-control form-control-dark text-bg-dark"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                    </form>
                    <div className="text-end">
                        <button
                            type="button"
                            className="btn btn-outline-light me-2"
                        >
                            Login
                        </button>
                        <button type="button" className="btn btn-warning">
                            Sign-up
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
