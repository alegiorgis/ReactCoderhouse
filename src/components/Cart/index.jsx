import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart';
import { useCartContext } from '../../context/CartContext';
import { Button } from 'react-bootstrap';
import './styles.css';

const Cart = () => {
    const { cart, removeItem, clearCart, totalCart } = useCartContext();
    const total = totalCart();

    return (
        <div className="flex flex-col items-center min-h-screen h-full text-center py-12 space-y-4 mt-14">
            {cart.length > 0 ? (
                <div className='py-5'>
                    {cart.map((prod) => {
                    return <ItemCart
                        key={prod.item.id}
                        productos={prod}
                        removeItem={removeItem}
                    />
                    })}
                </div>
            ) : (
                <div className='min-vh-100 py-5'>
                    <h2 className='pb-4'>¡El carrito está vacío!</h2>
                    <Button as={Link} to={`/tienda`} variant="info" size="sm">Empezá a comprar</Button>
                </div>
            )}
            {cart.length > 0 && (
                <div className='pb-5'>
                    <div className='mx-2 pb-4 px-2 lg:px-4'>
                        <p className='bg-total cart-total'>Total: $ {total}</p>
                    </div>
                    <div className='d-flex justify-content-center no-wrap'>
                        <Button as={Link} to={`/tienda`} variant="info" size="sm" className='mx-3'>Seguir Comprando</Button>
                        <Button onClick={() => clearCart()} variant="info" size="sm" className='mx-3'>Vaciar Carrito</Button>
                        <Link to={`/form`}>
                            <Button variant="info" size="sm" className='mx-3'>Terminar Compra</Button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart;