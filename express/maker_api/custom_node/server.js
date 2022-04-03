//Always at the top of the file(required)
const express = require('express');
const app = express();
const PORT = 3000;

//middleware(required)(above the route but below the top code )
app.use( express.json() );
app.use( express.urlencoded({extended:true}) );

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];


// Server routing
//callback function takes two parameters(request object, response object)
app.get("/api", (requestObj, responseObj) => {
    console.log('callback function');
    // text is the default response method but...
    // responseObj.send("hello");
    //...we need response in json data
    responseObj.json({status: 'ok'})
})


app.get("/api/hello", (req, responseObj)=>{
    responseObj.json({message: "wassup"})
})

app.get("/api/users", (req, responseObj)=>{
    responseObj.json({all_users: users})
})

//getting one user by id
//we cannot access variables, i.e ind, without the middleware 
app.get("/api/users/:ind", (requestObj, res)=>{
    //one way: first need to get the ind from the requestObj from the url sent by the user
        // console.log(requestObj.params)
        // res.json(users[requestObj.params.ind]);
    //another way: destructure ind from requestObj.params
    const {ind} = requestObj.params;
        // res.json(users[ind]);
    //third way, enrich response
    res.json({
        ind: requestObj.params.ind,
        status: 200,
        user: users[ind]
    })
})

//post request
app.post("/api/users", (req, res)=>{
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json( { status: "ok" } );
})

const deleteFunction = (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1);
    // we always need to respond with something
    res.json( { status: "ok" } );
}

//delete request
app.delete("/api/users/:id", deleteFunction);

//Always at the end of the file(required)
app.listen(PORT, console.log(`PORT: ${PORT}`))