import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(parseInt(initial));
    const [changeBtn, setChangeBtn] = useState(true);
    const [stockItems, setStockItems] = useState(stock);

    const addQuantity = () => {
        quantity < stockItems ? setQuantity(quantity + 1) : alert('Alcanzaste el máximo de stock disponible.');
    };

    const reduceQuantity = () => {
        quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
    };

    const addToCart = () => {
        onAdd(quantity);
        setQuantity(1);
        setChangeBtn(false);
        setStockItems(stockItems - quantity);
    };

    return (
        <div>
            <div className='my-3'>
                <p className='text-muted lead mt-3'>Stock: {stockItems}</p>
                { stockItems > 0 ?
                <div>
                    <Button variant="info" size="sm" onClick = {reduceQuantity}>-</Button>
                    <Button variant="outline-info" size="sm" disabled className='mx-1'>{quantity}</Button>
                    <Button variant="info" size="sm" onClick = {addQuantity}>+</Button><br/>
                    { changeBtn ?
                    <Button variant="info" size="sm" onClick = {addToCart}>Agregar al Carrito</Button>
                    :
                    <div>
                        <Button variant="info" size="sm" onClick = {addToCart}>Agregar al Carrito</Button><br/>
                        <Link to= "/tienda">
                            <Button variant="info" size="sm">Seguir Comprando</Button><br/>
                        </Link>
                        <Link to= "/carrito">
                            <Button variant="info" size="sm">Terminar Compra</Button>
                        </Link>
                    </div>
                    }
                </div>
                :
                <Button variant="outline-info" size="sm" disabled className='mx-1'>Producto sin stock</Button>

                }
            </div>
        </div>
        
    )
}

export default ItemCount;