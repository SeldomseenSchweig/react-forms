import { randomUUID } from 'crypto';
import React, {useState} from 'react';
import Item from './item';
import NewItemForm from './NewItemForm';
import { v4 as uuid } from 'uuid'




const ShoppingList =()=>{
    const INITIAL_STATE = [
        {id:uuid(),name:"AB", quantity:3},
        {id:uuid(),name:"Apple", quantity:5}
    ]
    const [items, setItems] = useState(INITIAL_STATE)
    const addItem = (newItem)=>{
        setItems(items =>([...items,{...newItemid, id:uuid()} ]))
    }

    return (

        <div>
            <NewItemForm addItem={addItem} />
            <h1> Shopping List</h1>
            <div>
            
            { items.map(({id,name,quantity}) =><Item id={id} name={name} quantity={quantity} key={id}/> )}
            </div>

            
        </div>
    )



}

export default ShoppingList;