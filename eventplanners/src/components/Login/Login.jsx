import React , { useState } from 'react';
// import './Login.css';
import './Login.css' ;
import { event , tron } from '../../assets' ;
import { Link, useNavigate } from 'react-router-dom';


function Log() {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password)
    // useNavigate('/home') ;
    nav('/');  
  }

  return (
    <div>
    <div className="LoginPageContainer">
      <div className="LoginPageInnerContainer">
        <div className="ImageContianer">   
          <img src={event} />       
        </div>
        <div className="LoginFormContainer">
          <div className="LoginFormInnerContainer">
            <div className="LogoContainer">
            </div>
            <header className="header">Log in</header>
            <header className="subHeader">
              Welcome to <b>EventNest!</b> Please Enter your Details
            </header>

            <form>
              <div className="inputContainer">
                <label className="label" htmlFor="emailAddress">
                  <img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon" alt="LabelIcon" />
                  <span>Email Address*</span>
                </label>
                <input
                  type="email"
                  className="input"
                  id="emailAddress"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="inputContainer">
                <label className="label" htmlFor="password">
                  <img src="https://i.imgur.com/g5SvdfG.png" className="labelIcon" alt="LabelIcon" />
                  <span>Password*</span>
                </label>
                <input
                  type="password"
                  className="input"
                  id="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="OptionsContainer">
                <div className="checkboxContainer">
                  <input type="checkbox" id="RememberMe" className="checkbox" />
                  <label htmlFor="RememberMe">Remember me</label>
                </div>
                <a href="#" className="ForgotPasswordLink">
                  Forgot Password?
                </a>
              </div>
              <button type="submit" className="LoginButton" onClick={handleSubmit} >
                Login
              </button>
              <div className='SignUp'>
                <p>Don't have an account?&nbsp;<Link to={'/signup'} style={{ color: '#4520ff', textDecoration: 'underline' }}>SignUp</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Log;