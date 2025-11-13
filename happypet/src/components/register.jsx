import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // Get existing users or create new array
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Check if user with same email exists
      const exists = users.some(user => user.email === formData.email);
      if (exists) {
        alert('User with this email already exists!');
        return;
      }

      // Save new user
      users.push({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      });
      localStorage.setItem('users', JSON.stringify(users));

      alert('Registration Successful! Please login.');
      navigate('/login');
    };

    const handleCancel = () => {
      navigate('/login');
    };

    return (
      <div className="min-w-[500px] bg-white px-12 py-9 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex flex-col items-start mx-auto">
        <h1 className="font-normal text-3xl mb-7 self-center">
          Register Your Account
        </h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex w-full mb-5">
            <div className="flex flex-col flex-1 mr-3">
              <label htmlFor="firstName" className="text-xs text-gray-600 mb-2">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="h-8 border border-gray-300 rounded px-2 text-base outline-none"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col flex-1 ml-3">
              <label htmlFor="lastName" className="text-xs text-gray-600 mb-2">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="h-8 border border-gray-300 rounded px-2 text-base outline-none"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex w-full mb-5">
            <div className="flex flex-col flex-1 mr-3">
              <label htmlFor="email" className="text-xs text-gray-600 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="h-8 border border-gray-300 rounded px-2 text-base outline-none"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col flex-1 ml-3">
              <label htmlFor="password" className="text-xs text-gray-600 mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="h-8 border border-gray-300 rounded px-2 text-base outline-none"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button 
            type="submit"
            className="bg-[#EFAFBC] text-white border-none px-9 py-2 rounded font-medium text-base cursor-pointer mb-3"
          >
            Submit
          </button>
          <div>
            <button
              type="button"
              className="bg-none border-none text-gray-600 text-sm cursor-pointer p-0 underline"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  };

  export default Register;
