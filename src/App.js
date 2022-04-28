import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Movies from './components/movieTable';
import {Routes , Route, Router, BrowserRouter} from "react-router-dom"
import Customers from './components/customers';
import Rentals from './components/rentals';
import Notfound from './components/notfound';
import LoginForm from './components/loginForm';

function App() {
  return (
   
     
       <BrowserRouter>
       <Navbar />
       <Routes>
       <Route  path='/login' element={ <LoginForm /> } /> 
      <Route  path='/customers' element={ <Customers /> } />
      <Route path='/rentals' element={ <Rentals /> } />
      <Route exact path="/" element={ <Movies /> } />
      <Route path="*" element={ <Notfound/> } />
      </Routes >
      </BrowserRouter>
    
     

  
  );
}

export default App;
