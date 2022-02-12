import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import Loader from '../../components/Loader';
import { getFirestore } from '../../firebase';

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { productoId } = useParams();

    useEffect(() => {
        setLoading (true);
        const db = getFirestore();
        const itemCollection = db.collection('items');
        setTimeout(() => {
            itemCollection.get().then((value) => {
                if(value === 0) {
                    console.log('No se encontraron resultados!');
                }
                let aux = value.docs.map((doc) => { 
                    return { ...doc.data(), id: doc.id };
                });
                const miFiltro = productoId
                ? aux.filter((item) => item.producto === productoId)
                : aux;
                setItems(miFiltro);
            }).catch((error) => {
                console.log('Error searching items', error);
            }).finally(() => {
                setLoading(false);
            });
        }, 2000);
    }, [productoId]);
    
    return loading ? (
        <h2 className='p-5 text-center'><Loader/></h2> 
    ) : (
        <div className='container py-5'>
            <h3 className='text-center'>{greeting}</h3>
            <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
                <ItemList items={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer;