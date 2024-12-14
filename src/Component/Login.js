import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../utils/userSlice'; // Import if you want to manage logout as well

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state) => state.user); // Get user state from Redux
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check if username and password match the registered user
    if (username === user.fullname && password) { // For simplicity, assume only fullname is used as username
      // Successful login logic here, e.g., set loggedIn state
      navigate('/'); // Redirect to a dashboard or home page
    } else {
      alert('Invalid username or password'); // Handle invalid login
    }
  };

  return (
    <section className="section-register py-[100px] max-[1199px]:py-[70px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div className="cr-register max-w-[600px] m-auto p-[30px] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px]">
              <div className="form-logo w-full mb-[30px] flex items-center justify-center">
                <h2 className='font-Manrope text-[38px] font-bold'>Log In</h2>
              </div>
              <form className="cr-content-form w-full" onSubmit={handleLogin}>
                <div className="flex flex-wrap w-full">
                  <div className="min-[576px]:w-[100%] w-full mb-[30px]">
                    <div className="form-group">
                      <label className="mb-[9px] text-[#444] text-[15px] font-medium">User Name*</label>
                      <input 
                        type="text" 
                        placeholder="Enter Username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="cr-form-control w-full py-[0.575rem] px-[0.75rem] block text-[14px] text-[#777] font-normal leading-[1.5] border-[1px] border-solid border-[#e9e9e9] outline-[0] rounded-[5px]" 
                      />
                    </div>
                  </div>
                  <div className="min-[576px]:w-[100%] w-full mb-[30px]">
                    <div className="form-group">
                      <label className="mb-[9px] text-[#444] text-[15px] font-medium">Password*</label>
                      <input 
                        type="password" 
                        placeholder="Enter Your Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="cr-form-control w-full py-[0.575rem] px-[0.75rem] block text-[14px] text-[#777] font-normal leading-[1.5] border-[1px] border-solid border-[#e9e9e9] outline-[0] rounded-[5px]" 
                      />
                    </div>
                  </div>
                  <div className="cr-register-buttons w-full text-center flex justify-between items-center flex-wrap">
                    <button type="submit" className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] hover:bg-[#000] hover:border-[#000]">Log In</button>
                    <Link to="/register" className="link py-[8px] text-[#777]">Register here!</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
