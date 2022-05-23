import React, { useEffect, useState } from 'react';

const Home = () => {
   const [user ,setUser] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res =>res.json())
        .then(data=>setUser(data));
    },[])
    return (
        <div>
           <h>Total user in : {user.length}</h>
        </div>
    );
};

export default Home;