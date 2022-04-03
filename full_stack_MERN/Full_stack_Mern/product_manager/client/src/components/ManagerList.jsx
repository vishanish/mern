import React, { useState } from "react";
import{Link, Route, Switch} from 'react-router-dom';
import axios from 'axios';


export default props =>{
    console.log(props);

    const deleteManager = id => {
        axios.delete('http://localhost:8000/api/' + id + '/delete')
            .then(res => {
                console.log(res.data)
                //remove it from the DOM
                props.setItem(props.item.filter((x) => x._id != id))

            })
            .catch(err => console.error(err));
    }

    return(
    <div>
        {/* <p>{JSON.stringify(items)}</p> */}
        {props.item.map((manager, index)=>{
            return(
            <p key ={manager._id}>
                <Link to ={"/" + manager._id + "/edit"}>
                    {manager.title}
                </Link><br />
                    <button onClick = {() => deleteManager(manager._id)}>DELETE</button>
            </p>
            )
        })} 
    </div>
    )
}