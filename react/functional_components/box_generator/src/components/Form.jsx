import React, {useState} from 'react';

const Form = props => {
    const [size, setSize] = useState(100);
    const [color, setColor] = useState("");

    const handleChanges = e =>  {
        e.preventDefault();
        if(e.target.name === "color")  {
            setColor(e.target.value);
            console.log(color);
        } else if(e.target.name === "size")  {
            setSize(e.target.value);
            console.log(size);
        }
    }

    const createBox = e =>  {
        e.preventDefault();
        props.setBoxes([
            ...props.boxes,{
            color: color,
            size: size}
        ])
        setSize(100);
        setColor("");
        console.log(props.boxes)
    }

    return(
        <form onSubmit = {(e) => createBox(e)}>
            <fieldset>
                <legend>Create your box!</legend>
                <input onChange = {(e) => handleChanges(e)} type = "text" name = "color" placeholder = "Color" value = {color}></input>
                <input onChange = {(e) => handleChanges(e)} type = "number" name = "size" placeholder = "Size" value = {size}></input>
                <input type = "submit" value = "Create Box"></input>
            </fieldset>
        </form>
    );
}

export default Form;