import React from "react";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary header">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
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
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">
                                Ventas
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">
                                Pedidos
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">
                                Productos
                            </a>
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
