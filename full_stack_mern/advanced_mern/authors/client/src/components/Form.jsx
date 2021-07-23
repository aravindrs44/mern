import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { navigate } from '@reach/router';

import TextField from '@material-ui/core/TextField';

const Form = ({ form }) => {
    const [formState, setFormState] = useState({});

    const changeHandler = e => {
        e.preventDefault();
        setFormState({name: e.target.value});
        console.log(formState);
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(e);
        if(e.target.name === "cancel-button")    {
            navigate('/');
            console.log("chunky");
        }else    {
            if(form === "new")  {
                axios.post('http://localhost:8000/api/authors/new', formState)
                    .then(res => navigate('/'))
                    .catch(err => console.log(err))
            } else if(form === "edit")    {
                
            }
        }
    }

    return(
        <div>
            <fieldset>
                <legend>Create Author</legend>
                <form onSubmit = {submitHandler}>
                    <TextField onChange = {changeHandler}  label="Author" />
                    <div>
                    <button type = "submit" name = "submit-button" className = "btn btn-outline-success">Submit</button>
                    </div>
                </form>
                    <button onClick = { submitHandler } name = "cancel-button" className = "btn btn-outline-danger">Cancel</button>
            </fieldset>
        </div>
    )
}

export default Form;