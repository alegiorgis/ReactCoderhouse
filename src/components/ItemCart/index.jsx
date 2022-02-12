import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TrashWidget from '../TrashWidget'

const ItemCart = ( { productos, removeItem }) => {
    return (
        <Col id={productos.item.id} xs={12} className='d-flex align-items-center flex-column cart-container'>
            <Row className='w-100 align-items-center'>
                <Col xs={1}>
                    <button className='btn-no-format' onClick={() => removeItem(productos.item.id)}>
                    <TrashWidget />
                    </button>
                </Col>
                <Col xs={3}>
                    <Link to={`/detalle/${productos.item?.id}`}>
                    <img src={productos.item.img} className='cart-thumbnail' alt={productos.item.nombre}></img>
                    </Link>
                </Col>
                <Col xs={5} className='cart-header'>
                    {productos.item.nombre} x {productos.quantity}
                </Col>
                <Col className='cart-price'>
                    $ {productos.item.precio * productos.quantity}
                </Col>
            </Row>
        </Col>
    )
}

export default ItemCart;