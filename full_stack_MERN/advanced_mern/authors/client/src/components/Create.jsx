import React, {useState} from 'react';
import axios from 'axios';
import {useHistory, Link} from 'react-router-dom'

const Create =(props) =>{

    const history = useHistory();

    const [name, setName] = useState("");

    const addAuthor = (e) => {
        e.preventDefault();
        console.log(name);
        const newAuthor ={
            name:name
        }
        axios.post("http://localhost:8000/api/authors", newAuthor)
            .then((response) => {
                console.log(response.data)
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h2><Link to = "/">Home</Link> </h2>
            <h3>Add a new author:</h3>
            <form onSubmit = {addAuthor}>
                <label>Name:</label><br />
                <input type='text' onChange = {(e) => setName(e.target.value)} value ={name} /><br/>
                <button> <Link to ='/'>Cancel</Link></button>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Create