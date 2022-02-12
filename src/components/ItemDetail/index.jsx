import React from 'react';
import ItemCount from '../ItemCount';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './styles.css';

const ItemDetail = ({ item }) => {
    const { addItem } = useCartContext();
    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className='container text-start justify-content-around py-5'>
            <div className='row'>
                <div className='col-10 mx-auto col-md-4 my-3'>
                    <img className='img-fluid' src={item.img} alt={item.nombre} title={item.nombre} loading='lazy' />
                </div>
                <div className='col-10 mx-auto col-md-6 my-3'>
                    <h1>{item.nombre}</h1>
                    <h4 className='text-title text-uppercase text-muted mt-3 mb-3'>
                        Producto <span className='text-uppercase'>{item.producto}</span>
                    </h4>
                    <h4 className='text-blue'>
                        <strong>${item.precio}</strong>
                        <ItemCount stock={item.stock} initial={item.stock >= 1 ? 1 : 0} onAdd={onAdd} />
                        <hr></hr>
                        <p className='font-weight-bold mt-3 mb-0'>Información sobre el producto:</p>
                        <p className='text-muted lead'>{item.descripcion}</p>
                        <Link to={`/tienda`}>
                            <Button variant="info" size="sm">← Volver a la tienda</Button>
                        </Link>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;