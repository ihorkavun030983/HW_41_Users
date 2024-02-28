import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './style.sass'

export default function Form ({ formData, handleSubmit, handleInputChange }) {
  const history = useHistory();

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <div >
      
      <form onSubmit={handleSubmit} className="user__form">
      <h3>User Form</h3>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Street"
          name="street"
          value={formData.street}
          onChange={handleInputChange}
        />
        <button handleClick={() => history.push("/")} className="user__btnform">Save</button>
        <button onClick={handleCancel} className="user__btnform">Cancel</button>
      </form>
    </div>
  );
};

