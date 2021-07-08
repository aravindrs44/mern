import React, {useState} from 'react';

const Results = props =>   {
    return(
        <div>
            <div>First Name: {props.firstName}</div>
            <div>Last Name: {props.lastName}</div>
            <div>Email: {props.email}</div>
            <div>Password: {props.password}</div>
            <div>Confirm Password:{props.confirmPassword}</div>
        </div>
    );
}

export default Results;
