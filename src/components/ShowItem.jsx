import React, { useState } from 'react';

const ShowItem = ({ item, deleteItem }) => {

    
    return (
        <>
            <li>
                <h2>Nimi: {item.name}</h2>
                <p>Koko: {item.size}</p>
                <p>Väri: {item.color}</p>
                <p>Merkki: {item.brand}</p>
                <p class="mb-8">Tag: {item.tag}</p>
            </li>
            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-8" onClick={deleteItem}>Poista</button>
        </>
    )

}
export default ShowItem;