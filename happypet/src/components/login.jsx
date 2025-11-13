import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {


  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  // localStorage data structure: Save credentials as array of users [{email, password}]
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Try to find a user with the same email and password
    const user = users.find(u => u.email === formData.email && u.password === formData.password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user)); // Save current user as logged in
      alert('Login successful!');
      navigate('/'); // Redirect to landing page
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh",
      background: "transparent"
    }}>
      <div className="flex justify-center items-center min-h-[80vh] bg-transparent w-full">
        <div className="min-w-[500px] bg-white px-12 py-9 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex flex-col items-start mx-auto">
          <h1 className="font-normal text-3xl mb-7 ml-2.5">
            Login
          </h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex w-full mb-5">
              <div className="flex flex-col flex-1 mr-3">
                <label htmlFor="email" className="text-xs text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-8 border border-gray-300 rounded px-2 text-base outline-none"
                />
              </div>
              <div className="flex flex-col flex-1 ml-3">
                <label htmlFor="password" className="text-xs text-gray-600 mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="h-8 border border-gray-300 rounded px-2 text-base outline-none"
                />
              </div>
            </div>
            <div className="flex w-full items-center mb-2.5">
              <button
                type="submit"
                className="bg-[#f7bbc8] text-white border-none px-8 py-2 rounded font-medium text-base cursor-pointer mr-7"
              >
                Sign In
              </button>
              <a
                href="#"
                className="text-xs text-gray-500 no-underline"
              >
                Recover Password
              </a>
            </div>
            <div className="mt-2.5">
              <a
                href="#"
                className="text-sm text-gray-900 no-underline"
              >
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
