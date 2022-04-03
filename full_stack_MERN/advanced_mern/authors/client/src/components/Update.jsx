import React, {useEffect, useState} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import axios from 'axios';

const Update =(props) => {

    const {id} = useParams();
    console.log(id);

    const history = useHistory();

    const [name, setName] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
        .then((response) => {
            console.log(response)
            setName(response.data.name)
        })
        .catch(err => console.log(err))
    },[id])

    const editAuthor = (e) => {
        e.preventDefault();
        console.log(name);
        const updateAuthor ={
            name:name
        }
        axios.put(`http://localhost:8000/api/authors/${id}`, updateAuthor)
            .then((response) => {
                console.log(response.data)
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return(
        
        <div>
            <h2><Link to = "/">Home</Link> </h2>
            <h3>Edit this author</h3>
            <form onSubmit = {editAuthor}>
                <label>Name:</label><br />
                <input type='text' onChange = {(e) => setName(e.target.value)} value ={name} /><br/>
                <button> <Link to ='/'>Cancel</Link></button>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Update