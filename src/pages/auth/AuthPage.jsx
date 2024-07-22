import { useState } from "react"
import { Login } from "../../components/Login"

import './authPage.css'

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  const handleAuthPageToggle = () => {
    setIsLogin((prev) => !prev)
  }

  return (
    <div className="auth-container">
      {isLogin ? (
        <Login switchAuthHandler={handleAuthPageToggle}/>
      ) : (
        <h1>hola</h1>
        /*<Register switchAuthHandler={handleAuthPageToggle}/>*/
      )}
    </div>
  )
}
