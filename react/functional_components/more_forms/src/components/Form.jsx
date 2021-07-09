import React, {useState} from 'react';


const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    const handleFirstName = e => {
        setFirstName(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 2)  {
            setFirstNameError("Field must be at least 2 characters");
        }   else    {
            setFirstNameError("");
        }
    }

    const handleLastName = e => {
        setLastName(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 2)  {
            setLastNameError("Field must be at least 2 characters");
        }   else    {
            setLastNameError("");
        }
    }

    const handleEmail = e => {
        setEmail(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 5)  {
            setEmailError("Field must be at least 5 characters");
        }    else    {
            setEmailError("");
        }
    }

    const handlePassword = e => {
        setPassword(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 8)  {
            setPasswordError("Field must be at least 8 characters");
        }   else    {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 8)  {
            setConfirmPasswordError("Field must be at least 8 characters");
        }   else if (e.target.value != password)  {
            setConfirmPasswordError("Fields do not match!")
        }   else    {
            setConfirmPasswordError("");
        }
    }

    return(
        <form onSubmit = {createUser}>
            <div>
                <label>First Name: </label>
                <input type = "text" value = {firstName} onChange = {handleFirstName} />
                    {
                        firstNameError ? <p style = {{color: 'red'}}>{firstNameError}</p> : ""
                    }
            </div>
            <div>
                <label>Last Name: </label>
                <input type = "text" value = {lastName} onChange = {handleLastName}/>
                    {
                        lastNameError ? <p style = {{color: 'red'}}>{lastNameError}</p> : ""
                    }
            </div>
            <div>
                <label>Email: </label>
                <input type = "text" onChange = {handleEmail} value = {email}/>
                    {
                        emailError ? <p style = {{color: 'red'}}>{emailError}</p> : ""
                    }
            </div>
            <div>
                <label>Password: </label>
                <input type = "password" onChange = {handlePassword} value = {password}/>
                    {
                        passwordError ? <p style = {{color: 'red'}}>{passwordError}</p> : ""
                    }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type = "password" onChange = {handleConfirmPassword} value = {confirmPassword}/>
                    {
                        confirmPasswordError ? <p style = {{color: 'red'}}>{confirmPasswordError}</p> : ""
                    }
            </div>
            <input type = "submit" value = "Create User"/>
        </form>
        );
    }

    export default Form;