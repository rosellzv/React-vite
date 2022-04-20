import { Link,NavLink } from "react-router-dom"
import { UserContext } from "../context/UserProvider"
import { useContext } from "react"


const Navbar = () => {
  const {user,setUser} = useContext(UserContext)
  return (
    <>
    {
      (user) ? (
        <>
        <NavLink to='/' >Inicio</NavLink>    
        <button onClick={() =>{setUser(false)}}>Desconectar</button>   
        </>
      ) :
      <NavLink to='/login' >Login</NavLink>
    }
    </>
  )
}

export default Navbar