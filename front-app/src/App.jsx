import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components/Adduser';
import UserList from './components/Userlist';
import Edituser from './components/Edituser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<Edituser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
