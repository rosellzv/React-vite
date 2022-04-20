import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from "../context/UserProvider"


const Login = () => {

  const {user,setUser} = useContext(UserContext)
  const navegate = useNavigate()

  const handleClickLogin = () =>{
    setUser(true)
    navegate('/')
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleClickLogin}>Cambiar</button>
      {
        (user) ?
        <h2>En linea</h2> : <h2>Desconectado</h2>
      }
    </>
  )
}

export default Login