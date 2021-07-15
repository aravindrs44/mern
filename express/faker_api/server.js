import express from 'express';
import faker, { fake } from 'faker';

const express = require("express");
const app = express();
const port = 8000;

app.listen( port, () => console.log(`Listening on port: ${port}`))

class User {
    constructor()   {
        this.id = faker.finance.routingNumber();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phoneNumber();
        this.email = faker.internet.email(this.firstName, this.lastName);
        this.password = faker.internet.password();
    }
}

class Company {
    constructor()   {
        this.id = faker.finance.routingNumber();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.street(),
            city: fake.address.city(),
            state: fake.address.state(),
            zipcode: fake.address.zipcodeByState(this.address.state),
            country: fake.address.country()
        }
    }
}

app.get("api/users/new", (req, res) => {
    res.json( User );
})

app.get("api/companies/new", (req, res) => {
    res.json( Company );
})

app.get("api/user/company", (req, res) => {
    res.json( User );
    res.json( Company );
})