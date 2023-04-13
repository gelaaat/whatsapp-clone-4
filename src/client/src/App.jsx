import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignIn from './Components/SignIn';
import LoginFailure from './Components/LoginFailure';
import UserProfile from './Components/UserProfile';
import ProtectedRoute from './Components/ProtectedRoute';


function App() {

  return (
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login-failure' element={<LoginFailure />} />
        <Route path='/userProfile' element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        } />
      </Routes>
  )
}

export default App;
