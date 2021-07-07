import React, {Component} from 'react';

class PersonCard extends Component  {
    constructor(props)  {
        super(props);
        this.state = {age: this.props.age};
    }

    render()    {
        const { firstName, lastName, age, hairColor } = this.props;
        return(
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick = {this.addAge}>Birthday button for {firstName} {lastName}</button>
            </div>
        );
    }

    addAge = () =>    {
        let person_age =  this.state.age + 1;
        this.setState({age: person_age})
    }
}

export default PersonCard;