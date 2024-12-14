import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { addUser } from '../utils/userSlice'

const Register = () => {

  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fullnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  
  // this is to sync data with ui layer
  const [formData, setFormData] = useState({fullname:"",email:"",password:""});

  const handleFormSubmit = (e) =>{
    e.preventDefault();

    // here its assigning value to keys so its must same
    const fullname = fullnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Validate inputs
    if (!fullname || !email || !password) {
      setErrorMessage('Please fill in all fields.');
      setSuccessMessage(''); // Clear success message if there's an error
      return;
    }

    setFormData({fullname, email, password})


    // Dispatch the action to add user
    dispatch(addUser({ fullname, email }));
    
    // Set success message
    setSuccessMessage('Registration successful!');
    setErrorMessage(''); // Clear error message on successful registration

    // Optionally, clear the form inputs
    fullnameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';

  }

  return (
    <>
      <section className="section-register py-[100px] max-[1199px]:py-[70px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div className="cr-register max-w-[600px] m-auto p-[30px] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                <div className="form-logo w-full mb-[30px] flex items-center justify-center">
                  <h2 className='font-Manrope text-[38px] font-bold leading-[1.2] text-[#2b2b2d] max-[1199px]:text-[28px] max-[991px]:text-[25px] max-[767px]:text-[22px]'>Register Now</h2>
                </div>
                <form className="cr-content-form w-full" onSubmit={handleFormSubmit}>
                  <div className="flex flex-wrap w-full">
                    <div className="w-full max-[575px]:p-[0] mb-[30px]">
                      <div className="form-group">
                        <label className="mb-[9px] text-[#444] text-[15px] font-medium tracking-[0] leading-[1] inline-block">Full Name*</label>
                        <input ref={fullnameRef} type="text" placeholder="Enter Your Full Name" className="cr-form-control w-full py-[0.575rem] px-[0.75rem] block text-[14px] text-[#777] font-normal leading-[1.5] border-[1px] border-solid border-[#e9e9e9] outline-[0] rounded-[5px]" />
                      </div>
                    </div>
                    <div className="w-full max-[575px]:p-[0] mb-[30px]">
                      <div className="form-group">
                        <label className="mb-[9px] text-[#444] text-[15px] font-medium tracking-[0] leading-[1] inline-block">Email*</label>
                        <input ref={emailRef} type="email" placeholder="Enter Your Email" className="cr-form-control w-full py-[0.575rem] px-[0.75rem] block text-[14px] text-[#777] font-normal leading-[1.5] border-[1px] border-solid border-[#e9e9e9] outline-[0] rounded-[5px]" />
                      </div>
                    </div>
                    <div className="w-full max-[575px]:p-[0] mb-[30px]">
                      <div className="form-group">
                        <label className="mb-[9px] text-[#444] text-[15px] font-medium tracking-[0] leading-[1] inline-block">Password*</label>
                        <input ref={passwordRef} type="password" placeholder="Enter Your Password" className="cr-form-control w-full py-[0.575rem] px-[0.75rem] block text-[14px] text-[#777] font-normal leading-[1.5] border-[1px] border-solid border-[#e9e9e9] outline-[0] rounded-[5px]" />
                      </div>
                    </div>
                    <div className="cr-register-buttons w-full text-center flex justify-between items-center flex-wrap">
                      <button type="submit" className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]">Sign Up</button>
                      <Link to="/login" className="link py-[8px] text-[#777]">Have an account?</Link>
                    </div>
                  </div>
                </form>
                {successMessage && (
                  <div className="mt-4 text-green-600">
                    {successMessage}
                  </div>
                )}
                {errorMessage && (
                  <div className="mt-4 text-red-600">
                    {errorMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register