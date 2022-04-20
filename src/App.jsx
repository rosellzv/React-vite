import {Routes,Route} from 'react-router-dom'
import Home from "./routes/Home";
import Login from './routes/Login';
import Navbar from './components/Navbar';
import RequireAuth from './components/RequireAuth';

const App = () => {  

  return (
    <>
    <Navbar />
    <Routes>      
      <Route path='/' element={
        <RequireAuth>
          <Home />
        </RequireAuth>
      }></Route>
      <Route path='/Login' element={<Login />}></Route>
    </Routes>
    </>
  );
};

export default App
