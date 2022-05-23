import React, { useEffect } from 'react';

const Home = () => {

    useEffect(()=>{
        fetch('http://localhost:5000/user')
    },[])
    return (
        <div>
           
        </div>
    );
};

export default Home;