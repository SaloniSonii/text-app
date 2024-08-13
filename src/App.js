import React, { useState } from 'react'
import TextForm from './components/TextForm';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  const[mode, setMode] = useState('dark');
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      document.title='Textutils-Dark Mode';
     
     // setInterval(()=>{
       // document.title='Textutils is amazing Mode';

      //},2000);
      //setInterval(()=>{
        //document.title='Install Textutils ';

      //},2000);
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.title='Textutils-Light Mode';
      

    }
  }
  return (
    <div>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode ={toggleMode}/>     
      <Routes>
   <Route path='/' element={<div className="container my-8">
   <TextForm heading="Enter the text to analyze below" mode={mode}/>
   </div>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
   </Router> 
   </div>
  )
}

export default App;
