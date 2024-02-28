import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteUser } from "../services/services";
import UsersContext from "../context/UsersContext";
import UserItem from "./UserItem";
import './style.sass'

export default function UsersList () {
    const {list, setList} = useContext(UsersContext);

    useEffect(() => {
        setList(list)
    }, [list]);

    const handleDeleteUser = id => {
        deleteUser(id)
            .then(() => {
                setList(list.filter(user => user.id !== id));
            })
            .catch(error => console.error('Error deleting editUser:', error));
    };

    return (
        list.length ? (
            <div className='users__list'>
                <h2>Users List</h2>
                <ul className='users__items'>
                    {list.map(user => (
                        <UserItem
                            key={user.id}
                            user={user}
                            handleDeleteUser={handleDeleteUser}
                        />
                    ))}
                </ul>
                <Link to="/createuser" style={{
          color: "blue",
          backgroundColor: "darkgrey",
          padding: "15px",
          borderRadius: "5px",
          textDecoration: "none",
        }}>Create User</Link>
            </div>
        ) : ('')
    );
};