import React from "react";
import Item from "../components/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDolly, faEye } from "@fortawesome/free-solid-svg-icons";
const Orders = () => {
    return (
        <div className="contenedor mt-3">
            <div className="row">
                <div className="col">
                    <Item
                        width="100%"
                        height="30rem"
                        animated="animate__fadeInLeft animate__slow"
                    >
                        <h3 className="text-center mt-2">Pedidos pendientes</h3>
                        <hr />
                        <div className="row">
                            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                <table className="table table-bordered table-striped mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Folio</th>
                                            <th scope="col">Dirección</th>
                                            <th scope="col">Tipo de envio</th>
                                            <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>CALLE AGUSTIN LARA NO. 69-B</td>
                                            <td>Express</td>
                                            <td>
                                                <button className="btn btn-info">
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                    />
                                                </button>
                                                <button className="btn btn-success">
                                                    <FontAwesomeIcon
                                                        icon={faDolly}
                                                    />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>AV. INDEPENDENCIA NO. 241</td>
                                            <td>Normal</td>
                                            <td>
                                                <button className="btn btn-info">
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                    />
                                                </button>
                                                <button className="btn btn-success">
                                                    <FontAwesomeIcon
                                                        icon={faDolly}
                                                    />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>
                                                BLVD. BENITO JUAREZ NO. 1466-A
                                            </td>
                                            <td>En persona</td>
                                            <td>
                                                <button className="btn btn-info">
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                    />
                                                </button>
                                                <button className="btn btn-success">
                                                    <FontAwesomeIcon
                                                        icon={faDolly}
                                                    />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>AV. INDEPENDENCIA NO. 545</td>
                                            <td>Normal</td>
                                            <td>
                                                <button className="btn btn-info">
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                    />
                                                </button>
                                                <button className="btn btn-success">
                                                    <FontAwesomeIcon
                                                        icon={faDolly}
                                                    />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>BLVD. BENITO JUAREZ S / N</td>
                                            <td>Express</td>
                                            <td>
                                                <button className="btn btn-info">
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                    />
                                                </button>
                                                <button className="btn btn-success">
                                                    <FontAwesomeIcon
                                                        icon={faDolly}
                                                    />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>
                                                <button className="btn btn-info">
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                    />
                                                </button>
                                                <button className="btn btn-success">
                                                    <FontAwesomeIcon
                                                        icon={faDolly}
                                                    />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>
                                                <button className="btn btn-info">
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                    />
                                                </button>
                                                <button className="btn btn-success">
                                                    <FontAwesomeIcon
                                                        icon={faDolly}
                                                    />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>
                                                <button className="btn btn-info">
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                    />
                                                </button>
                                                <button className="btn btn-success">
                                                    <FontAwesomeIcon
                                                        icon={faDolly}
                                                    />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Item>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Item
                        width="100%"
                        height="3s0rem"
                        animated="animate__fadeInRight animate__slow"
                    >
                        <h3 className="text-center mt-2">Pedidos enviados</h3>
                        <hr />
                        <div className="row">
                            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                <table className="table table-bordered table-striped mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Item>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Item
                        width="100%"
                        height="3s0rem"
                        animated="animate__fadeInLeft animate__slow"
                    >
                        <h3 className="text-center mt-2">Pedidos cancelados</h3>
                        <hr />
                        <div className="row">
                            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                <table className="table table-bordered table-striped mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Item>
                </div>
                
            </div>
            <div className="row">
            <div className="col">
                    <Item
                        width="100%"
                        height="3s0rem"
                        animated="animate__fadeInRight animate__slow"
                    >
                        <h3 className="text-center mt-2">
                            Pedidos completados
                        </h3>
                        <hr />
                        <div className="row">
                            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                <table className="table table-bordered table-striped mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Item>
                </div>
            </div>
        </div>
    );
};

export default Orders;
