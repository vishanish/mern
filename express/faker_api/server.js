const  express  = require ('express');
const app = express();
const PORT  = 3000;
const { faker } = require('@faker-js/faker');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

class User {
    constructor() {
        this._id = faker.datatype.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this. password = faker.internet.password();
        
    }
}

    // console.log(new User());

    class Company {
        constructor() {
            this._id = faker.datatype.number();
            this.name = faker.company.companyName()	
            this.address = {street: faker.address.streetAddress(),
                city: faker.address.cityName(),
                state: faker.address.state(),
                zipCode:faker.address.zipCode()
            }
            
        }
    }
    
        // console.log(new Company());


app.get("/api/users/new", (req, res) =>{
    res.json(new User());
})

app.get("/api/companies/new", (req, res) =>{
    res.json(new Company());
})

app.get("/api/user/company", (req, res) =>{
    res. json ({
        user: new User(),
        company: new Company()
    });
})

//always at the end of the the file
app.listen(PORT, () => {
    console.log('PORT', PORT)
})