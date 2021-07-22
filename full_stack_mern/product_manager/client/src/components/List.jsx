import axios from 'axios';
import React from 'react';
import { Link, navigate } from '@reach/router';


import { useState, useEffect } from 'react';

const List = () => {
    const [hunkaState, setHunkaState] = useState();
    const [deleteState, setDeleteState] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => setHunkaState(res.data.allProducts))
        .catch(err => console.log(err))
    }, [deleteState])

    const deleteHandler = product_id =>  {
        axios.delete(`http://localhost:8000/api/products/${product_id}/delete`)
            .then(res => setDeleteState(!deleteState))
            .catch(err => console.log(err))
    }

    const mapHandler = () => {
            return hunkaState.map((product, i) =>
            <div key = {i}>
                <Link to = {`/products/${product._id}`} >{product.title}</Link>
                <button onClick = {() => deleteHandler(product._id)}>Delete</button>
            </div>)
    }

    return(
        <div>
            {
                hunkaState ? mapHandler(): <p>Getting your data!</p>
            }
        </div>
    )
}

export default List;