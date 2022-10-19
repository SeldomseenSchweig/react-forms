import React, {useState} from 'react';





const NewItemForm =({addItem})=>{
    const INITIAL_STATE = {
        name:"",
        quantity:""
    }
    const [formData, setFormData] = useState([INITIAL_STATE])
    const handleChange = (e) =>{

        const {name,value} = e.target;
        setFormData(formData =>( {
            ...formData,
            [name]:value
         }))
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        addItem(formData.name,formData.quantity);
        setFormData(INITIAL_STATE)

    } 


    return (

        <form onSubmit={handleSubmit} >
            <label htmlFor='name'> Product Name</label>
            <input 
            id='name'
            name='name'
            type='text'
            placeholder='Item Name'
            value={formData.name}
            onChange={handleChange}
            />
                    <label htmlFor='quantity'> Product Name</label>
            <input 
            id='quantity'
            name='quantity'
            type='quantity'
            placeholder='quantity'
            value={formData.quantity}
            onChange={handleChange}
            />
          <button>Submit</button>  
        </form>
    )



}

export default NewItemForm;