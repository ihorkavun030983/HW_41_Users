import React from "react";
import { Link } from "react-router-dom";
import './style.sass'

export default function UserItem({ user, handleDeleteUser }) {
  return (
    <li className="users__item">
      <p>{user.name}</p>

      <Link
        to={`/user/${user.id}`}
        style={{
          color: "black",
          backgroundColor: "grey",
          padding: "8px 15px",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        Edit
      </Link>

      <button
        className="users__button"
        onClick={() => handleDeleteUser(user.id)}
      >
        Delete
      </button>
    </li>
  );
}
