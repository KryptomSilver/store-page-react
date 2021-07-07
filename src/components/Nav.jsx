import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary header">
            <div className="container-fluid">
                <a className="navbar-brand" href="#!">
                    Dashboard
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/sales">
                                Ventas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/orders">
                                Pedidos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/products">
                                Productos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/users">
                                Usuarios
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <button className="btn btn-md btn-success">
                            Iniciar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
