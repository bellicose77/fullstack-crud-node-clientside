import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    useEffect(()=>{
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
        .then(res=>res.json())
    },[])
    return (
        <div>
            <h2>This is update user: {id}</h2>
        </div>
    );
};

export default UpdateUser;