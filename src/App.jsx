import React, { useState, createContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import './assets/style.css';
import CreateUser from './components/CreateUser';
import Sidebar from './components/Sidebar';
import ReadUser from './components/ReadUser';
import EditUser from './components/EditUser';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import './App.css';
import axios from 'axios';

// create context
const userContext = createContext()

 

function App() {
  //create state from data
    const [user, setUser] = useState([]);

    //new record form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

 


   // edit user
    const [edituser, setEdituser] = useState('ID');
   const [selectedId, setSelectedId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  //Profile edit 

   const [selectedId2, setSelectedId2] = useState(null);
  const [editedName2, setEditedName2] = useState("");
  const [editedMark2, setEditedMark2] = useState("");
  const [options2, setOptions2] = useState("ID");

   const fetchNotes = async () => {
    try {
      const response = await axios.get(
        "https://65bc9d7fb51f9b29e931de1d.mockapi.io/users/"
      );
      setUser(response.data);
    } catch (error) {
      console.log("Failed to fetch notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

    

  
  return (
    <>
    <userContext.Provider value={{user,setUser, name, setName, email, setEmail, edituser, setEdituser,selectedId, setSelectedId, editedName, setEditedName, editedEmail, setEditedEmail,selectedId2, setSelectedId2, editedName2, setEditedName2, editedMark2, setEditedMark2, options2, setOptions2} }>
    <Routes>
      
        <Route
          path="/"
          element={
            <HomePage>
              <Dashboard />
            </HomePage>
          }
        />

         <Route
          path="/users"
          element={
            <HomePage>
              <ReadUser />
            </HomePage>
          }
        />
     
         <Route
          path="/create-user"
          element={
            <HomePage>
              <CreateUser />
            </HomePage>
          }
        />
     
         <Route
          path="/edit-user/:id"
          element={
            <HomePage>
              <EditUser />
            </HomePage>
          }
        />
     
         <Route
          path="/profile/:id"
          element={
            <HomePage>
              <Profile />
            </HomePage>
          }
        />
         <Route
          path="/edit-profile/:id"
          element={
            <HomePage>
              <ProfileEdit />
            </HomePage>
          }
        />
     
    </Routes>
    </userContext.Provider>
  
    </>
  )
}

export { App as default, userContext}