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
      <div className="flex flex-col w-screen items-center justify-center h-screen tracking-wider font-mono bg-gray-100">
        <form
          action="submit"
          className="flex flex-col justify-center items-center w-9/12 border rounded-md shadow-xl bg-blue-400"
        >
          <div className="border bg-white shadow-lg shadow-blue-700 mt-12 mb-12 justify-center items-center flex flex-col w-8/12 m-4 rounded-lg  ">
            <h1 className="flex items-center font-bold justify-center w-9/12 mt-8 mb-8 bg-blue-200 rounded-md text-3xl h-20 shadow-inner">
              RECIPES
            </h1>
            <input
              autoComplete="off"
              className="border border-blue-400 rounded-md p-4 m-4 w-11/12"
              id="email"
              name="email"
              onChange={({target}) => handleChange(target)}
              placeholder="Email"
              type="email"
              value={loginData.email}
            />
            <input
              autoComplete="off"
              className="border border-blue-400 rounded-md p-4 m-4 w-11/12"
              id="password"
              name="password"
              onChange={({target}) => handleChange(target)}
              placeholder="Password"
              type="password"
              value={loginData.password}
            />
            <button
              className="disabled:  enabled:cursor-pointer enabled: enabled:bg-blue-200 enabled:hover:bg-white tracking-wider rounded-md  enabled:shadow-xl text-xl p-4 m-4 mb-8 mt-8 w-1/2"
              disabled={isDisable}
              onClick={handleSubmitClick}
              type="submit"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
