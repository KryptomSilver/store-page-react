import React, { useEffect,useState } from "react";
import Item from "../components/Item";

import axios from "axios";
import Producto from "../components/Producto";

const Products = () => {
    const [productos, setProductos] = useState([])
  useEffect(() => {
    const obtenerProductos = async () => {
      const productsAPI = await axios.get(
        "https://store-react-native.herokuapp.com/api/v1/Products"
      );
      setProductos(productsAPI.data);
    };
    obtenerProductos();
  }, []);

  return (
    <div className="contenedor mt-3">
      <div className="row">
        <div className="col">
          <Item
            width="100%"
            height="30rem"
            animated="animate__fadeInLeft animate__slow"
          >
            <h3 className="text-center mt-2">PRODUCTOS</h3>
            <hr />
            <div className="row">
              <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table table-bordered table-striped mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Producto</th>
                      <th scope="col">Descripcion</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Accion</th>
                    </tr>
                  </thead>
                  <tbody>
                      {productos.map((producto)=>(
                          <Producto producto={producto} key={producto._id}/>
                      ))}
                    
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

export default Products;
