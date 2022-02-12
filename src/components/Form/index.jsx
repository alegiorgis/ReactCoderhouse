import { useCartContext } from '../../context/CartContext';
import { useState } from 'react';
import { getFirestore } from '../../firebase';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import firebase from 'firebase/app';
import './styles.css';

const Form = () => {
    const { cart, clearCart, totalCart} = useCartContext();
    const [id, setId] = useState("");
    const [datosUsuario, setDatosUsuario] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: 0
    });

    const handleInputChange = (e) => {
        setDatosUsuario({...datosUsuario, [e.target.name]: e.target.value});
    };

    const pedido = {
        cliente: datosUsuario,
        productos: cart,
        total: totalCart(),
        fecha: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    const confirmOrder = (e) => {
        if(
            datosUsuario.nombre.length < 2 ||
            datosUsuario.apellido.length < 2 ||
            datosUsuario.email.length < 6 ||
            datosUsuario.tel.length < 10
        ){
            alert('Por favor, completa todos tus datos.');
            return;
        } else if (cart.length === 0) {
            alert('Vuelve a la tienda para continuar comprando.');
            return;
        }
            e.preventDefault();
            const db = getFirestore();
            const orderCollection = db.collection("orders");
            const query = orderCollection.add(pedido);
            query
                .then(({ id }) => {
                    setId(id);
                })
                .catch(() => {
                    console.log("error");
                })
                clearCart();
    };

    if (id === "") {
        return (
            <form className="form-usuario">
                <h1>Ingresá tus datos</h1>
                <input onChange={handleInputChange} name="nombre" type="text" placeholder="Nombre" required />
                <input onChange={handleInputChange} name="apellido" type="text" placeholder="Apellido" required />
                <input onChange={handleInputChange} name="email" type="email" placeholder="Email" required />
                <input onChange={handleInputChange} name="tel" type="tel" placeholder="Telefono" required />
                <Button className='mt-3' variant="info" size="sm" onClick={confirmOrder}>Confirmar Compra</Button>
            </form>
        );
    } else {
        return (
            <div className="form-usuario">
                <h1>¡Gracias por tu compra!</h1>
                <p>El pedido se ha realizado con exito, el ID de tu compra es {id}</p>
                <Link to={`/tienda`}>
                    <Button variant="info" size="sm">← Volver a la tienda</Button>
                </Link>
            </div>
        );
    };
};

export default Form;