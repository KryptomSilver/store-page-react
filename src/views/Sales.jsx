import React from "react";
import Item from "../components/Item";

const Sales = () => {
    return (
        <div className="contenedor mt-3">
            <Item
                width="100%"
                height="52rem"
                animated="animate__fadeIn animate__slow"
            >
                <h3 className="text-center mt-2">Ventas</h3>
                <hr />
                <div className="row mt-5">
                    <div className="col-3 d-flex justify-content-end align-items-center">
                        <label htmlFor="">Nombre del comprador:</label>
                    </div>
                    <div className="col-3">
                        <select
                            className="form-select"
                            aria-label="Default select example"
                        >
                            <option defaultValue>Selecciona un opción</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
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
                                    <th>Folio</th>
                                    <th>Total</th>
                                    <th>Dirección</th>
                                    <th>Fecha</th>
                                    <th>Aciones</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>76123TU82</td>
                                    <td>$ 185.5</td>
                                    <td>Av. Pablo Silva Garcia 302</td>

                                    <td>08/01/1998</td>
                                    <th className="d-flex aling-items-center justify-content-evenly">
                                        <button className="btn-outline-info btn btn-md">
                                            Ver
                                        </button>
                                    </th>
                                </tr>
                                <tr>
                                    <td>76123TU82</td>
                                    <td>$ 185.5</td>
                                    <td>Av. Pablo Silva Garcia 302</td>
                                    <td>08/01/1998</td>
                                    <th className="d-flex aling-items-center justify-content-evenly">
                                        <button className="btn-outline-info btn btn-md">
                                            Ver
                                        </button>
                                    </th>
                                </tr>
                                <tr>
                                    <td>76123TU82</td>
                                    <td>$ 185.5</td>
                                    <td>Av. Pablo Silva Garcia 302</td>

                                    <td>08/01/1998</td>
                                    <th className="d-flex aling-items-center justify-content-evenly">
                                        <button className="btn-outline-info btn btn-md">
                                            Ver
                                        </button>
                                    </th>
                                </tr>
                                <tr>
                                    <td>76123TU82</td>
                                    <td>$ 185.5</td>
                                    <td>Av. Pablo Silva Garcia 302</td>

                                    <td>08/01/1998</td>
                                    <th className="d-flex aling-items-center justify-content-evenly">
                                        <button className="btn-outline-info btn btn-md">
                                            Ver
                                        </button>
                                    </th>
                                </tr>
                                <tr>
                                    <td>76123TU82</td>
                                    <td>$ 185.5</td>
                                    <td>Av. Pablo Silva Garcia 302</td>

                                    <td>08/01/1998</td>
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

export default Sales;
