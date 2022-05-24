import React, { useEffect, useState } from 'react';

const Home = () => {
   const [users ,setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res =>res.json())
        .then(data=>setUsers(data));
    },[])
    return (
        <div>
           <h>Total user in : {users.length}</h>

           <ul>
               {
                   users.map(user=><li>{user.name} ::
                   {user.email}
                   </li>)
               }
           </ul>
        </div>
    );
};

export default Home;