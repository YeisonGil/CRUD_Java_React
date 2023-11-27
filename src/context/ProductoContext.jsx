import { createContext, useContext, useState, useEffect } from "react";
import { ConsultarProductos } from '../api/productos';

const ProductoContext = createContext();

export const useProductos = () => {
    const context = useContext(ProductoContext);

    if (!context) {
        throw new Error(`useProductos debe ser usado dentro de ProductosProvider`);
    }
    return context;
};

export function ProductosProvider({ children }) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const res = await ConsultarProductos();
                setProductos(res.data);
                console.log(res.data);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };

        obtenerProductos();
    }, []);

    return (
        <ProductoContext.Provider value={{
            productos,
            ConsultarProductos
        }}>
            {children}
        </ProductoContext.Provider>
    );
}
