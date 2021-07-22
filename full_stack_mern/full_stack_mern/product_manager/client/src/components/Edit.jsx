import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Edit = ({_id}) =>  {
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => setProduct(res.data.oneProduct[0]))
            .catch(err => console.log(err))
    }, [])

    const handleChange = e =>   {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>   {
        e.preventDefault();
        console.log(product)
        axios.put(`http://localhost:8000/api/products/${_id}/edit`, product)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return(
        <div>
        {
            product ?
                <div>
                    {console.log(product)}
                    <h2>Edit {product.title}</h2>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <form onSubmit = {handleSubmit}>
                <div>
                    <input onChange = {handleChange} value = {product.title} name = "title" type = "text" placeholder = "title" />
                </div>
                <div>
                    <input onChange = {handleChange} value = {product.price} name = "price" type = "number" placeholder = "price" />
                </div>
                <div>
                    <input onChange = {handleChange} value = {product.description} name = "description" type = "text" placeholder = "description" />
                </div>
                <button>Create</button>
            </form>
                </div>
                :  <h2>Edit</h2>
        }
        </div>
    )
}

export default Edit;