import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Pokemon = () =>   {
    const [data, setData] = useState();
    const [buttonClickedState, setButtonClickedState] = useState(false);

    useEffect(() => {
        console.log(buttonClickedState)
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=898')
            .then(response => {setData(response.data.results)})
            .catch(err => console.log(err))
    })
        // fetch('https://pokeapi.co/api/v2/pokemon/?limit=898')
        //     .then(response => response.json())
        //     .then(response => setData(response.results))
        //     .catch(err => console.log(err))
    // }, []);

    const mapHandler = () =>  {
            return data.map((pokemon, i) => <li key = {i}>Name: {pokemon.name}</li>)
    }

    return(
        <div>
            {/* <button onClick = {setButtonClickedState(true)}>Catch 'em all</button> */}
            {
            (buttonClickedState) ?
            <ol>
                {
                    data ? mapHandler(): <p>Encountering Pokemon</p>
                }
            </ol>:
            <button onClick = {() => setButtonClickedState(true)}>Catch 'em all</button>
            }
        </div>
    )
}

export default Pokemon;