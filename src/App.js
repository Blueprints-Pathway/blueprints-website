import React from 'react';
import { BrowserRouter as Router  } from 'react-router-dom'; 
import  './App.css'
import Navbar from './components/Navbar/Index';
import Home from './Pages';



function App() {
  return (
    <>
    <Router>
       
       <Home/>
       <Navbar></Navbar>/
    </Router>
    
      
   
     
    </>
  );
}

export default App;
  