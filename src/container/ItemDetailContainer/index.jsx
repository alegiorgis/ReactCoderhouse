import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import Loader from '../../components/Loader';
import { getFirestore } from '../../firebase';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

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
                let single = aux.find((e) => {
                    return e.id === itemId;
                });
                setItem(single);
            }).catch((error) => {
                console.log('Error al buscar items', error);
            }).finally(() => {
                setLoading(false);
            });
        }, 2000);
    }, [itemId]);

    return loading ? (
        <h2 className='p-5 text-center'><Loader/></h2>  
    ) : (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;