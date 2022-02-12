import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './styles.css';

const Secciones = [
    {id: '1', nombre: 'INICIO', ruta: '/'},
    {id: '2', nombre: 'NOSOTROS', ruta: '/nosotros'},
    {id: '3', nombre: 'TIENDA', ruta: '/tienda'},
    {id: '4', nombre: <CartWidget />, ruta: '/carrito'},
]

const Productos = [
    {id: '3.1', nombre: 'MONITOR', ruta: '/producto/Monitor'},
    {id: '3.2', nombre: 'NOTEBOOK', ruta: '/producto/Notebook'},
    {id: '3.3', nombre: 'SILLA', ruta: '/producto/Silla'},
    {id: '3.4', nombre: 'PROYECTOR', ruta: '/producto/Proyector'},
    {id: '3.5', nombre: 'TABLET', ruta: '/producto/Tablet'},
]

const ItemLink = () => {
    const [secciones, setSecciones] = useState([]);

    useEffect(() => {
        const getSecciones = new Promise((res, rej) => {
            res(Secciones);
        });
        
        getSecciones.then(res => setSecciones(res));
    }, []);

    return (
        <>
            {secciones.map((seccion) => {
                return(
                    <Link className='nav-link' key={seccion.id} to={seccion.ruta}>{seccion.nombre}</Link>
                )
            })} 
        </>
    )
}

export const ItemLinkProducto = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getProductos = new Promise((res, rej) => {
            res(Productos);
        });
        
        getProductos.then(res => setProductos(res));
    }, []);

    return (
        <>
            {productos.map((producto) => {
                return(
                    <Link className='nav-link-producto' key={producto.id} href={producto.ruta} to={producto.ruta}>{producto.nombre}</Link>
                )
            })} 
        </>
    )
}

export default ItemLink;