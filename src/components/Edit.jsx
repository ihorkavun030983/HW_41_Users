import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { updateUser } from '../services/services';
import UsersContext from '../context/UsersContext';
import Form from "./Form";

export default function Edit () {

    const {list, setList} = useContext(UsersContext);
    const history = useHistory();
    const parameters = useParams();
    const usersId = +parameters.id;
    
    let newUser = list.find(user => user.id === usersId);

    const [form, setForm] = useState({});

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    useEffect(() => {

        newUser && setForm({

            name: newUser.name,
            username: newUser.username ,
            email: newUser.email,
            city: newUser.address.city ,
            street: newUser.address.street
        })
        
    }, [list]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(usersId, form)
            .then(data => {
                setList(list.map(user => user.id === usersId ? data : user));
                history.push('/');
            })
    };

    return (
        <div>
            <Form formData={form}
             handleSubmit={handleSubmit}
             handleInputChange={handleInputChange}/>
        </div>
    );
};