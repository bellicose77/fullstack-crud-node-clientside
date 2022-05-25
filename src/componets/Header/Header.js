import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to ='/'>Home</Link>
            <Link to='/adduser'>AddUser</Link>
            <Link to ='/user/update/:id'>UpdateUser</Link>
        </div>
    );
};

export default Header;