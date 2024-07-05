import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ removeToken }) => {

    const navigate = useNavigate();


  const handleLogout = () => {
    removeToken(); // Clear token in App component state
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
