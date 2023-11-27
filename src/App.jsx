import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListaProductos from './pages/ListaProductos/ListaProductos'
import { ProductosProvider } from './context/ProductoContext'

function App() {
    return (
        <>
            <ProductosProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<ListaProductos />} />
                    </Routes>
                </BrowserRouter>
            </ProductosProvider>
        </>
    )
}

export default App
