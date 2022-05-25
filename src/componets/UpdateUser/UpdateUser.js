import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    const [user,setUser]=useState({name:'',email:''});
    useEffect(()=>{
        const url =`http://localhost:5000/user/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
     
    const handleName = e =>{
        const updateName = e.target.value;
        const newUser = {...user};
        newUser.name=updateName;
        setUser(newUser)
        console.log(newUser);
       

    }
    const handleEmail = e =>{
        const updateEmail = e.target.value;
        const updateUser = {...user};
        updateUser.email=updateEmail;
        setUser(updateUser);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();

        const url =`http://localhost:5000/user/${id}`;
        fetch(url,{
            method:'PUT',

            headers:{
                
            }
            
        })

    }
    return (
        <div>
            <h2>Update user: {user.name}</h2>
            <form onSubmit={handleSubmit}>
               <input type="text" onChange={handleName} value={user.name}/>
               <input type="email" onChange={handleEmail} value={user.email}/>
               <input type="submit"/>
            </form>
        </div>
    );
};

export default UpdateUser;