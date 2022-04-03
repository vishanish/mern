import React, {useState} from 'react';

import axios from 'axios';

export default props => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/create/new",{
            title,
            price,
            description
        })
        .then(res => {console.log("Response: ", res)})
        .catch(err =>{console.log("Error: ", err)})
    }

    return(
        <form onSubmit = {onSubmitHandler}>
            <p>
                <label>Title: </label><br />
                <input type ='text' onChange = {(e) => setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price: </label> <br />
                <input type ='number' onChange = {(e) => setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description: </label><br />
                <input type = 'text' onChange = {(e) => setDescription(e.target.value)}/>
            </p>
            <input type ='submit' value ='Create' />
        </form>
    );
}