import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element  }) => {
  // return token ? element : <Navigate to="/login" replace />;
  const { token }  = useAuth();
  if (!token) return <Navigate to="/login" />;
  return element;
};

export default ProtectedRoute;
