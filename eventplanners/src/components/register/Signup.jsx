import React, { useState } from 'react';
import './Signup.css';
import { event } from '../../assets';
import { Link, useNavigate } from 'react-router-dom';

function Sig() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!name || !email || !password || !confirmPassword) {
      setPasswordError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    // Email validation
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    console.log(name, email, password);
    nav('/login');
  }

  const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="LoginPageContainer">
      <div className="LoginPageInnerContainer">
        <div className="ImageContianer">
          <img src={event} alt="Event" />
        </div>
        <div className="LoginFormContainer">
          <div className="LoginFormInnerContainer">
            <header className="header">SignUp</header>
            <header className="subHeader">
              Welcome to <b>EventNest!</b> Please Enter your Details
            </header>
            <div className="inputContainer">
              <label className="label" htmlFor="Name">
                <img src="https://i.imgur.com/g5SvdfG.png" className="labelIcon" alt="LabelIcon" />
                <span>Name*</span>
              </label>
              <input
                type="text"
                className="input"
                id="Name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <form>
              <div className="inputContainer">
                <label className="label" htmlFor="emailAddress">
                  <img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon" alt="LabelIcon" />
                  <span>Email Address*</span>
                </label>
                <input
                  type="email"
                  className={`input ${emailError ? 'border-red-500' : ''}`}
                  id="emailAddress"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
              </div>
              <div className="inputContainer">
                <label className="label" htmlFor="password">
                  <img src="https://i.imgur.com/g5SvdfG.png" className="labelIcon" alt="LabelIcon" />
                  <span>Password*</span>
                </label>
                <input
                  type="password"
                  className={`input ${passwordError ? 'border-red-500' : ''}`}
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="inputContainer">
                <label className="label" htmlFor="confirmPassword">
                  <img src="https://i.imgur.com/g5SvdfG.png" className="labelIcon" alt="LabelIcon" />
                  <span>Confirm Password*</span>
                </label>
                <input
                  type="password"
                  className={`input ${passwordError ? 'border-red-500' : ''}`}
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}
              </div>
              <div className="OptionsContainer"></div>
              <button type="submit" className="LoginButton" onClick={handleSubmit}>
                Signup
              </button>
              <div className='Login'>
                <p>Already have an account?&nbsp;<Link to={'/login'} style={{ color: '#4520ff', textDecoration: 'underline' }}>Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sig;
