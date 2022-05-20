import React from 'react';

const AddUser = () => {
    return (
        <div>
            <h2>Add user here</h2>
            <form>
                <input type="text" name="name" placeholder="enter name"/>
                <input type="email" name ="email" placeholder="email"/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default AddUser;