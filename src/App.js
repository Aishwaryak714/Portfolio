
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import {Redirect} from 'react-router-dom';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
 import Cart from './components/Cart';
 import Order from './components/Order';

function App() {
  return (
    <div>
      {/* <div className='row'>
        <div className='col-12'> 
          <Navbar/>
        </div>
      </div>  */}

       {/* <div className='row'>
        <div className='col-12'> */}

<Router>
  <Navbar/>

  <Routes> 
             <Route path='/' element={<Home/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/register' element={<Register/>}/>
             <Route path='/dashboard' element={ <Dashboard/> } />
             <Route path='/logout' element={<Logout/>}/>
             <Route path='/cart' element={ <Cart/> }/>
             <Route path='/order' element={<Order/>}/>
        </Routes>

</Router>


         {/* </div>
      </div> */}
      {/* <Router>
            <Navbar/> 
        <Routes> 
             <Route path='/' element={<Home/>}/>
             <Route path='/login' element={<Login/>}/>
        </Routes>
        </Router> */}


    </div>
  ); 
}

export default App;
