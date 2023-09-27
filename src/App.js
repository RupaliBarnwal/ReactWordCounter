
import Navbar from './components/Navbar';
import './App.css';
// import About from './components/About';
import TestForm from './components/TestForm';
import React, { useState } from 'react';


function App() {
  const[mode, setMode] = useState("light");

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor= '#46144b';
      
    }else{
      setMode ('light')
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
<Navbar title="Navbar1" mode={mode} toggleMode={toggleMode}/>
<br/>
      <br/>
    <div className="container my-3">
    <TestForm heading="Enter the text to analyse" mode={mode} />
    {/* <About/> */}
    </div>
    </>
   
  );
}

export default App;
