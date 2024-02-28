import React, {useContext, useState} from 'react';
import UsersContext from "../context/UsersContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addNewUser } from "../services/services";
import Form from "./Form";

export default function CreateUser (){
    const {list, setList} = useContext(UsersContext);
    const history = useHistory();

    const [form, setForm] = useState({
        name: '',
        username: '',
        email: '',
        city: '',
        street: ''
    });

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewUser(form)
            .then(() => {
                setList([...list, form]);
                history.push('/');
            })
    };

    return (
        <div style={{textAlign:'center', color:'white'}}>
            <h3>Create New User</h3>
            <Form formData={form} 
            handleSubmit={handleSubmit} 
            handleInputChange={handleInputChange}/>
        </div>
    );
};