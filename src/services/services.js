const API = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = () =>
    fetch(API)
        .then(response => response.json());

export const deleteUser = id =>
    fetch(`${API}/${id}`, {

        method: 'DELETE',

    }).then(response => response.json());

export const updateUser = (id, obj) => {
    return fetch(`${API}/${id}`, {

        method: 'PATCH',
        
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(obj)
    }).then(data => data.json());
};

export const addNewUser = (obj) =>
    fetch(API, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(obj)
    }).then(data => data.json());

