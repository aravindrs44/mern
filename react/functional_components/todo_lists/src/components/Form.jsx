import React, {useState} from 'react';

const List = props =>  {
    const [task, setTask] = useState("");

    const handleChange = e =>  {
        e.preventDefault();
        console.log(e.target.value)
        setTask(e.target.value);
    }

    const handleSubmit = e =>  {
        e.preventDefault();
        props.setFormState([
            ...props.formState,
            {
                task: task,
                completed: false,
                show: true
            }
        ])
        setTask("")
        console.log(props.formState);
    }

    return(
        <div>
            <form>
                <input onChange = {(e) => handleChange(e)} type = "text"></input>
                <button onSubmit = {(e) => handleSubmit(e)} type = "submit">Add</button>
            </form>
        </div>
    )
}

export default List;