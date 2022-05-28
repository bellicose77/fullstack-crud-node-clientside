import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
   const [users ,setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res =>res.json())
        .then(data=>setUsers(data))
    },[]);

    const handleDelete = id =>{
       const url = `http://localhost:5000/user/${id}`;
       fetch(url,{
           method:'DELETE'
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.deletedCount)
           {
               alert("deleted successfully");
               const remaining=users.filter(user=> user._id!==id)
               setUsers(remaining);
           }
       }
        )
    }
    return (
        <div>
           <h>Total user in : {users.length}</h>

           <ul>
               {
                   users.map(user=><li>{user.name} ::
                   {user.email}
                   <Link to={`/user/update/${user._id}`}>
                   <button>update</button>
                   </Link>
                   <button onClick={()=>handleDelete(user._id)}>X</button>
                   </li>)
               }
           </ul>
        </div>
    );
};

export default Home;