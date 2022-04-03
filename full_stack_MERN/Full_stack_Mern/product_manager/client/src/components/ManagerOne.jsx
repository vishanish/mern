import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const ManagerOne =(props) =>{

    const [oneManager, setOneManager] = useState({})

    const{id} =useParams();
    console.log(id);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/getone/" + id)
            .then(res => {
                console.log(res.data)
                setOneManager(res.data);

            })
            .catch((err) => {
                console.log("Error", err)
            })
    }, [id])

    return(
        <div>
                <h1>{oneManager.title}</h1>
            <p>
                Price: {oneManager.price}<br />
                Description: {oneManager.description}
            </p>
        </div>
    )
}

export default ManagerOne;