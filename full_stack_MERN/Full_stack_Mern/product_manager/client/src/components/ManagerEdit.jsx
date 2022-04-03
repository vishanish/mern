import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, useHistory } from "react-router-dom";
    
const ManagerEdit = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/getone/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price)
                setDescription(res.data.description);
            })
    }, []);
    
    const updateManager = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/' + id + '/edit', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    const deleteManager = e => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/' + id + '/delete')
            .then(res => {
                console.log(res)
            })
            .catch(err => console.error(err));
        history.push('/');
    }
    
    return (
        <div>
            <h1>Update an item</h1>
            <form onSubmit ={updateManager}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="price" 
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
                
                <button onClick = {deleteManager}>DELETE</button>
        </div>
    )
}
    
export default ManagerEdit;

