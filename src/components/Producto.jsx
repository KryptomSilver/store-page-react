import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDolly, faEye } from "@fortawesome/free-solid-svg-icons";

const Producto = ({producto}) => {
  return (
    
      <tr>
        <th scope="row">{producto.nameProduct}</th>
        <td>{producto.description}</td>
        <td>{producto.precioProduct}</td>
        <td>
          <button className="btn btn-info">
            <FontAwesomeIcon icon={faEye} />
          </button>
        </td>
      </tr>
    
  );
};

export default Producto;
