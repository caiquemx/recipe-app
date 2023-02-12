import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import gravatarImg from '../utils/gravatarHash';

export default function Login() {
  // consts and states
  const [loginData, setLoginData] = useState({email: '', password: ''});
  const [isDisable, setIsDisable] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    dataValidation();
  }, [loginData]);

  //handle email and password input change
  const handleChange = (target) => {
    const {name, value} = target;
    // update data state
    setLoginData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmitClick = (e) => {
    // dataToLocalStorage(loginData.email);
    navigate('/home');
  };

  const dataToLocalStorage = (email) => {
    const gravatar = gravatarImg(email);
    const data = {
      email,
      gravatar,
    };
    localStorage.setItem('user', JSON.stringify(data));
  };

  //validate email and password rules;
  const dataValidation = () => {
    // destruct email and passoword from state;
    const {email, password} = loginData;
    // save RegEx;
    const emailValidation =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //test rules;
    if (emailValidation.test(email) && password?.length >= 6) {
      //  if true button is actived
      return setIsDisable(false);
    }
    //if false button keep deativated
    return setIsDisable(true);
  };

  return (
    <main>
      <div className="form-container">
        <form
          action="submit"
          className="form"
        >
          <h1 className="app-title">RECIPES APP</h1>
          <input
            autoComplete="off"
            className="email-input"
            id="email"
            name="email"
            onChange={({target}) => handleChange(target)}
            placeholder="Email"
            type="email"
            value={loginData.email}
          />
          <input
            autoComplete="off"
            className="password-input"
            id="password"
            name="password"
            onChange={({target}) => handleChange(target)}
            placeholder="Password"
            type="password"
            value={loginData.password}
          />
          <button
            className="login-button"
            disabled={isDisable}
            onClick={handleSubmitClick}
            type="submit"
          >
            LOGIN
          </button>
        </form>
      </div>
    </main>
  );
}
