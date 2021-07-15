import React, { useState } from 'react';
import {navigate} from '@reach/router';

const Index = () => {
    const [resource, setResource] = useState("people");
    const [num, setNum] = useState(1);

    const handleChange = e =>   {
        e.preventDefault();
        if(e.target.name === "resource")    {
            setResource(e.target.value);
            console.log(resource)
        } else if(e.target.name === "num")  {
            setNum(e.target.value);
            console.log(num)
        }
    }

    const handleSumbit = e =>   {
        e.preventDefault();
        navigate(`/${resource}/${num}`);
    }

    return(
        <div>
            <form>
                <div>
                    <h2>What are you searching for?</h2>
                    <select name="resource" onChange = {(e) => handleChange(e)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="starships">Starships</option>
                    </select>
                </div>
                <div>
                    <h2>Which one are you searching for?</h2>
                    <input name = "num" type = "number" onChange = {(e) => handleChange(e)}/>
                    <p>Valid numbers to search:</p>
                    <p>Planets - 60</p>
                    <p>People - 83</p>
                    <p>Starships - 17</p>
                </div>
                <button onClick = {(e) => handleSumbit(e)}>Find what I want!</button>
            </form>
        </div>
    )
}

export default Index;