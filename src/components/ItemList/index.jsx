import React from 'react';
import Item from '../Item';

const ItemList = ({items}) => {
    return (
        <>
            {items?.map((item) => (
                <Item item={item} key={item.id} />
            ))}
        </>
    )
}

export default ItemList;