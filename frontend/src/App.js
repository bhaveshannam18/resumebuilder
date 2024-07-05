import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import { AuthProvider } from './context/AuthContext';
import CreateResume from './components/CreateResume';

function App() {

  const [token, setToken] = useState(localStorage.getItem('token'));

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const removeToken = () => {
    localStorage.removeItem('token');
    setToken(null);
  };
  
  return (
    <BrowserRouter>
        <AuthProvider>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setToken={updateToken} />} />
          <Route path="/logout" element={<Logout removeToken={removeToken} />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
          <Route path="/" element={<Navigate to="/login" />} />
          {/* <Route path="/create-resume" element={<CreateResume />} /> */}
          <Route
            path="/create-resume"
            element={<ProtectedRoute element={<CreateResume />} />}
          />
          <Route path="/edit-resume/:resumeId" element={<ProtectedRoute element={<CreateResume />} />} />
        </Route>
        </Routes>
        </AuthProvider>
    </BrowserRouter>
   
  );
}

export default App;
