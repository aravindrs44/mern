import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Detail = ({_id}) =>    {
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => setProduct(res.data.oneProduct[0]))
            .catch(err => console.log(err))
    }, [_id])

    return(
        <div>
        {
            product ?
                <div>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <Link to = {`/products/${_id}/edit`}>Edit</Link>
                </div>
                :  <p>Waiting for data!</p>
        }
        </div>
    )
}

export default Detail;