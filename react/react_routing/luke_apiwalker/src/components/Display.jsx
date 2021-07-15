import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Display = ({resource, num}) =>   {
    const [data, setData] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${resource}/${num}`)
            .then(response => {
                setData(response.data);
                setError(false);
            })
            .catch(err => {setError(true)})
    }, [resource, num])

    if(error == true)  {
        return(
            <div>
                <h1>These aren't the droids you're looking for</h1>
                <img src = "../imgs/these_arent_the_droids_youre_looking_for.gif"/>
            </div>
        )
    }

    if(data)    {
        if (resource === "planets")  {
            return(
                <div>
                    <p>Name: {data.name}</p>
                    <p>Climate: {data.climate}</p>
                    <p>Diameter: {data.diameter}</p>
                    <p>Name: {data.terrain}</p>
                </div>
            )
        } else if(resource === "people")    {
            console.log(data)
            return(
                <div>
                    <p>Name: {data.name}</p>
                    <p>Gender: {data.gender}</p>
                    <p>Hair Color: {data.hair_color}</p>
                    <p>Height: {data.height}</p>
                </div>
            )
        } else if(resource === "starships")    {
            console.log(data)
            return(
                <div>
                    <p>Name: {data.name}</p>
                    <p>Model: {data.model}</p>
                    <p>Starship Class: {data.starship_class}</p>
                    <p>Manufacturer: {data.manufacturer}</p>
                </div>
            )
        }
    } else {
        return(<h1>Waiting for data!</h1>)
    }

}

export default Display;