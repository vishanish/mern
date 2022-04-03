import axios from 'axios';
import React, {useEffect, useState} from 'react';
import ManagerForm from '../components/ManagerForm';
import ManagerList from '../components/ManagerList';
import ManagerOne from '../components/ManagerOne';
import ManagerEdit from '../components/ManagerEdit'
import{Route, Switch} from 'react-router-dom';

export default() => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/getall')
        .then(res => setItem(res.data))
        .catch(err => {console.log("Error: ", err)})
    },[])

    
    
    return(
        <>
            <Switch>
                <Route exact path = "/">
                    <ManagerForm />
                    <ManagerList item ={item} setItem = {setItem}/>
                </Route>
                <Route exact path = "/:id/edit">
                    <ManagerEdit />
                </Route>
                {/* <Route path = "/:id">
                    <ManagerOne />
                </Route> */}
            </Switch>
        </>
    )
}