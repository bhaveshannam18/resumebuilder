import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { token, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 font-montserrat">
      <header className="bg-indigo-800 text-gray-100 py-2 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold px-4">Bhavesh Annam Resume Builder</h1>
        {token ? (
          <button
            onClick={logout}
            className="mr-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white font-medium transition duration-300 ease-in-out"
          >
            Logout
          </button>
        ) : (
          <a
            href="/login"
            className="mr-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition duration-300 ease-in-out"
          >
            Login
          </a>
        )}
      </header>
      <main className="flex justify-center items-center p-4 h-full w-full flex-1">
        <Outlet />
      </main>
      <footer className="bg-indigo-800 text-gray-100 py-4 text-center">
        &copy; 2024 Bhavesh Annam Resume Builder. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
