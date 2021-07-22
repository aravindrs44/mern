import List from './List';
import React, { useState } from 'react';
import axios from 'axios';

const Form = () =>   {

const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: ""
})

    const handleChange = e =>   {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>   {
        e.preventDefault();
        console.log(product)
        axios.post('http://localhost:8000/api/products/new', product)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h2>Product Manager</h2>
            <form onSubmit = {handleSubmit}>
                <div>
                    <input onChange = {handleChange} name = "title" type = "text" placeholder = "title" />
                </div>
                <div>
                    <input onChange = {handleChange} name = "price" type = "number" placeholder = "price" />
                </div>
                <div>
                    <input onChange = {handleChange} name = "description" type = "text" placeholder = "description" />
                </div>
                <button>Create</button>
            </form>
            <List />
        </div>
    )
}

export default Form;