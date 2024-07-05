import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '.././api/axiosInstance';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (username.length < 3) {
      errors.username = 'Username must be at least 3 characters long';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      const response = await axiosInstance.post('/api/auth/signup', {
         name:username, email, password 
      });
      console.log(response)

      if (response.status === 201) {
        navigate('/login'); // Redirect to login page after successful signup
      } else {
        console.log("else register");
      }
    } catch (error) {
      if(error.response.status === 400){
          setErrors({serverError:error.response.data.email});
          setTimeout(()=>{
            setErrors({});
          },[3000]);
      } 
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-900">
      <form className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="username" className="block mb-3 text-base font-medium text-gray-900 dark:text-white">Username</label>
          <input
            type="text"
            id="username"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="bhaveshannam"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
        </div>
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
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          {Object.keys(errors).length > 0 && errors?.serverError !== "" && <p className="text-red-500 text-xs mt-1">{errors?.serverError}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-3 text-base font-medium text-gray-900 dark:text-white" >Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
        <p className="mt-6 text-center text-base text-gray-500 dark:text-gray-400">
          Already registered? <a href="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
