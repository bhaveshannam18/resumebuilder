import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [token, user]);

  const login = async (email, password) => {
    try {
      const response = await axiosInstance.post('/api/auth/login', { email, password });
      console.log(response)
      if (response.status === 200) {
        setToken(response.data.token);
        setUser(response.data.user);
        navigate('/dashboard');
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          throw { email: 'Email not found' };
        } else if (error.response.status === 400) {
          throw { password: 'Password incorrect' };
        } else {
          throw { server: 'An unexpected error occurred. Please try again.' };
        }
      } else if (error.request) {
        throw { server: 'No response from the server. Please try again.' };
      } else {
        throw { server: 'An error occurred. Please try again.' };
      }
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    return useContext(AuthContext);
  };
