import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../context/CartContext';
import './styles.css';

const CartWidget = () => {
    const { cart } = useCartContext();
    let itemsInCart = 0;

    cart.map((item) => {
        itemsInCart = itemsInCart + item.quantity;
        return item;
    });

    return (
        <>
            { itemsInCart !== 0 && (
                <>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="count-cart-widget">{itemsInCart}</span>
                </>
            )}
        </>
    )
}

export default CartWidget;