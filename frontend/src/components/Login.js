import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '.././api/axiosInstance'; // Adjust the import as needed
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { token, login } = useContext(AuthContext);

  useEffect(()=>{
    if(token){
      navigate("/dashboard");
    }
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors

    try {
      await login(email, password);
    } catch (err) {
      setErrors(err);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-900">
      <form className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        {errors.server && (
          <div className="mb-4 text-red-600">
            {errors.server}
          </div>
        )}
        <div className="mb-6">
          <label htmlFor="email" className="block mb-3 text-base font-medium text-gray-900 dark:text-white">Email</label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <div className="mt-2 text-red-600">
              {errors.email}
            </div>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-3 text-base font-medium text-gray-900 dark:text-white">Password</label>
          <input
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
             placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div className="mt-2 text-red-600">
              {errors.password}
            </div>
          )}
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
        <p className="mt-6 text-center text-base text-gray-500 dark:text-gray-400">
          New to Resume Builder? <a href="/signup" className="text-blue-700 hover:underline dark:text-blue-500">Sign up now</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
