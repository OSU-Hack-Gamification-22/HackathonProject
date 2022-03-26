
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Leaderboard from './Components/pages/Leaderboard';
import Login from './Components/Login'

import './styles/app.css'
function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Login />
      <div className='pages'>
      <Routes>
      <Route exact path='/' element ={<Home/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/contact' element ={<Contact/>}/>
      <Route path='/leaderboard' element ={<Leaderboard/>}/>
      </Routes>
      </div>
      </Router>
      
      </>
  );
};

export default App;
