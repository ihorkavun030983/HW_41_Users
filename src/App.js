import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import User from './pages/User';
import Users from './pages/Users';
import CreateUser from './pages/CreateUser'
import UsersContext from './context/UsersContext'
import {getUsers} from "./services/services";
import './App.css'

export default function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getUsers()
      .then(data => setList(data))
  },[]);

  return (
    
          <Router>
            <div  className='container'>
          <Switch>
            <UsersContext.Provider value={{list, setList}}>

                <Route path="/" exact>
                  <Users />
                </Route>

                <Route path="/user/:id">
                  <User />
                </Route>

                <Route path="/createuser">
                  <CreateUser />
                </Route>

            </UsersContext.Provider>
          </Switch>
          </div>
          </Router>
        
  );
}

