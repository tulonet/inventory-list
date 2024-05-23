import React, { useState } from 'react';

const ShowItem = ({ item }) => {
    
    return (
        <>
            <li>
                <h2>Nimi: {item.name}</h2>
                <p>Koko: {item.size}</p>
                <p>Väri: {item.color}</p>
                <p>Merkki: {item.brand}</p>
                <p class="mb-8">Tag: {item.tag}</p>
            </li>
        </>
    )

}
export default ShowItem;