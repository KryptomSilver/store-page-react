import React from 'react'
import Item from '../components/Item'

const Users = () => {
    return (
        <div className="contenedor mt-3">
            <Item
                width="100%"
                height="52rem"
                animated="animate__fadeIn animate__slow"
            >
                <h3 className="text-center mt-2">Usuarios</h3>
                <hr />
                <div className="row mt-5">
                    <div className="col-3 d-flex justify-content-end align-items-center">
                        <label htmlFor="">Nombre del Usuario:</label>
                    </div>
                    <div className="col-3">
                        <input className="form-control" type="text" name="buscador" id="buscar" />

                    </div>
                    <div className="col-1 d-flex aling-items-center justify-content-center">
                        <button className="btn btn-secondary">Buscar</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col d-flex justify-content-center align-items-center">
                        <table className="table table-bordered table-hover">
                            <thead className="bg-primary text-white text-center">
                                <tr className="">
                                    <th>Usuario</th>
                                    <th>Nombre Completo</th>
                                    <th>Correo Electronico</th>
                                    <th>Ciudad</th>
                                    <th>Aciones</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>Kryptom</td>
                                    <td>Abel Romero Ruiz</td>
                                    <td>abelromero@gmail.com</td>
                                    <td>Colima</td>
                                    
                                    <th className="d-flex aling-items-center justify-content-evenly">
                                        <button className="btn-outline-info btn btn-md">
                                            Ver
                                        </button>
                                    </th>
                                </tr>
                                <tr>
                                    <td>SkyYulinetd</td>
                                    <td>Cielo Yulinetd </td>
                                    <td>CieloRamirez@gmail.com</td>
                                    <td>Michoacan</td>
                                    
                                    <th className="d-flex aling-items-center justify-content-evenly">
                                        <button className="btn-outline-info btn btn-md">
                                            Ver
                                        </button>
                                    </th>
                                </tr>
                                <tr>
                                    <td>AyezaZamudio</td>
                                    <td>Ayeza Elizabeth Zamudio Comino</td>
                                    <td>ayezahmvc14@gmail.com</td>
                                    <td>Mexico</td>

                                    
                                    <th className="d-flex aling-items-center justify-content-evenly">
                                        <button className="btn-outline-info btn btn-md">
                                            Ver
                                        </button>
                                    </th>
                                </tr>
                                <tr>
                                    <td>FZambrano</td>
                                    <td>Francisco Zambrano</td>
                                    <td>Francervantes@gmail.com</td>
                                    <td>Jalisco</td>
                                    
                                    <th className="d-flex aling-items-center justify-content-evenly">
                                        <button className="btn-outline-info btn btn-md">
                                            Ver
                                        </button>
                                    </th>
                                </tr>
                                <tr>
                                    <td>Rcortez</td>
                                    <td>Roberto Cortez</td>
                                    <td>cortezR@gmail.com</td>
                                    <td>Jalisco</td>
                                    
                                    <th className="d-flex aling-items-center justify-content-evenly">
                                        <button className="btn-outline-info btn btn-md">
                                            Ver
                                        </button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex aling-items-center justify-content-end">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link" href="#!">
                                    &laquo;
                                </a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="#!">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#!">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#!">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#!">
                                    4
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#!">
                                    5
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#!">
                                    &raquo;
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Item>
        </div>
    );
};


export default Users
