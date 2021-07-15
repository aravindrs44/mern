const faker = require("faker");

const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.listen( port, () => console.log(`Listening on port: ${port}`));



class User {
    constructor()   {
        this.id = faker.finance.routingNumber();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email(this.firstName, this.lastName);
        this.password = faker.internet.password();
    }
}

class Company {
    constructor()   {
        this.id = faker.finance.routingNumber();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCodeByState(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    res.json( new User );
})

app.get("/api/companies/new", (req, res) => {
    res.json( new Company );
})

app.get("/api/user/company", (req, res) => {
    res.json( [new User, new Company] );
})