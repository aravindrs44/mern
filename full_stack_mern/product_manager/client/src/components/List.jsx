import axios from 'axios';
import React from 'react';
import { Link } from '@reach/router';


import { useState, useEffect } from 'react';

const List = () => {
    const [hunkaState, setHunkaState] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => setHunkaState(res.data.allProducts))
        .catch(err => console.log(err))
    }, [])

    const mapHandler = () => {                                  //still needs the correct URL
            return hunkaState.map((product, i) => <div key = {i}><Link to = {`/products/${product._id}`} >{product.title}</Link></div>)
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