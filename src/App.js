
// import Navbar from './Components/Navbar';
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './Components/pages/Home';
// import About from './Components/pages/About';
// import Contact from './Components/pages/Contact';
// import Leaderboard from './Components/pages/Leaderboard';
// import Form from './Components/Form'
// import Login from './Login'
import Main from './main';

// import './styles/app.css'
import './styles/app.css'
import GoogleLogin from './GoogleLogin';


function App() {
  return (
    <>

<Main />
      {/* <Router>
      <Navbar/>
      {/* <Login /> */}
      <GoogleLogin />
      <Login />
      <div className='pages'>
      <Routes>
      <Route exact path='/' element ={<Home/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/contact' element ={<Contact/>}/>
      <Route path='/leaderboard' element ={<Leaderboard/>}/>
      </Routes>
      </div>
      </Router> */}
      
      </>
  );
};

export default App;
export default App;


// ReactDOM.render(
//   <React.StrictMode>
//     <Main />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
