import React from 'react';

const AddUser = () => {
    const handleSubmit = () =>{
        
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