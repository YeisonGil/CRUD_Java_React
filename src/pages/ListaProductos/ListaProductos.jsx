import React, { useEffect } from 'react';
import { useProductos } from '../../context/ProductoContext';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const ListaProductos = () => {
  const { productos, ConsultarProductos } = useProductos();

  useEffect(() => {
    // Llama a la función ConsultarProductos al montar el componente
    ConsultarProductos();
  }, []);

  return (
    <>
      <div>
        <h1>Lista de Productos</h1>
        <ul>
          {productos.map(producto => (
            <li key={producto.id}>
              {producto.nombre} - {producto.precio}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListaProductos;
