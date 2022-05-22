import React, { useRef, useState } from 'react';

const AddUser = () => {
    const [user,setUser] = useState([]);
    const nameref = useRef('');
    const emailref = useRef('');
    const handleSubmit = (e) =>{
        const name = nameref.current.value;
        const email = emailref.current.value;
        // console.log(name);
        // console.log(email);
        const data ={name,email};
        fetch('http://localhost:5000/user',
        {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)


        })

        setUser(data);
        e.preventDefault();
    //    console.log("hitting the button");
    }
    console.log(user);
    return (
        <div>
            <h2>Add user here</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" ref={nameref} placeholder="enter name"/>
                <input type="email" name ="email" ref={emailref} placeholder="email"/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default AddUser;