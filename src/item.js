import React, {useState} from 'react';




const Item =({id,name,quantity})=>{

    return (

        <ul>
            <li>Product Name: {name}</li>
            <li>Quantity: {quantity}</li>
            
        </ul>
    )



}

export default Item;