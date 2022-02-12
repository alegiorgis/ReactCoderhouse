import { createContext, useContext, useState} from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const index = cart.findIndex((prod) => prod.item.id === item.id);
        
        if(index > -1) {
            const currentQuantity = cart[index].quantity;
            cart.splice(index, 1);
            setCart([...cart, { item, quantity: quantity + currentQuantity }]);
        } else {
            setCart([...cart, { item, quantity }]);
        };
    };

    const removeItem = (id) => {
        const deleteProduct = cart.filter((prod) => prod.item.id !== id);
        setCart([...deleteProduct]);
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalCart = () => {
        return cart.reduce( (acum, valor) => acum + valor.quantity * valor.item.precio, 0);
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clearCart, totalCart }}>
            { children }
        </CartContext.Provider>
    );
};