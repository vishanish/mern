import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

const Main =(props) => {
    const [authors, setAuthors] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(response => {
                console.log(response.data);
                setAuthors(response.data);
            })
            .catch(err => console.log(err))
    }, [])

    const deleteAuthor = (delAut) => {
        console.log(delAut);
        axios.delete("http://localhost:8000/api/authors/" + delAut)
            .then((response) => {
                console.log(response)
                setAuthors(authors.filter((author) => author._id !== delAut))
            })
            .catch(err => console.log(err))
    }
    return(
        <div>
            <h2><Link to = "/new">Add an author</Link> </h2>
            <h3>
                We have quotes by:
            </h3> 
            {
                authors.map((author, idx) =>{
                    return(
                    <div key ={author._id}>
                        <h5>{author.name}</h5>
                        <button><Link to = {'/edit/' + author._id}>Edit</Link></button>
                        <button onClick ={() => deleteAuthor(author._id)}>Delete</button>
                    </div>
                    )
                })
            }
                        
            </div>
    )
}

export default Main