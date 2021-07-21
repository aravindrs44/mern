import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Detail = ({_id}) =>    {
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => setProduct(res.data.oneProduct[0]))
            .catch(err => console.log(err))
    }, [_id])

    return(
        <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default Detail;