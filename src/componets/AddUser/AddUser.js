import React, { useRef, useState } from 'react';

const AddUser = () => {
    const [user,setUser] = useState([]);
    const nameref = useRef('');
    const emailref = useRef('')
    const handleSubmit = (e) =>{
       e.preventDefault();
       console.log("hitting the button");
    }
    return (
        <div>
            <h2>Add user here</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="enter name"/>
                <input type="email" name ="email" placeholder="email"/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default AddUser;