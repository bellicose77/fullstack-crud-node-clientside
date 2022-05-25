import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    const [user,setUser]=useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[]);

    const handleSubmit =(e)=>{
        e.preventDefault();
    }
    return (
        <div>
            <h2>Update user: {user.name}</h2>
            <form onSubmit={handleSubmit}>
               <input type="text"/>
               <input type="email"/>
               <input type="submit"/>
            </form>
        </div>
    );
};

export default UpdateUser;