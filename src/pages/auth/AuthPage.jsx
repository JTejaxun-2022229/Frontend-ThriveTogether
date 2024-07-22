import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../components/Login";

import './authPage.css';

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuthPageToggle = () => {
    setIsLogin((prev) => !prev);
  };

  const handleLoginSuccess = () => {

    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      {isLogin ? (
        <Login switchAuthHandler={handleAuthPageToggle} onLoginSuccess={handleLoginSuccess} />
      ) : (
        <h1>hola</h1>
        /*<Register switchAuthHandler={handleAuthPageToggle}/>*/
      )}
    </div>
  );
};