
import Navbar from './components/Navbar';
import './App.css';
// import About from './components/About';
import TestForm from './components/TestForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const[mode, setMode] = useState("light");

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor= '#46144b';
      showAlert("Dark Mode has been Enabled", "Success");
      
    }else{
      setMode ('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled", "Success");
    }
  }
  const[alert, setAlert]=useState(null);
  
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  return (
    <>
<Navbar title="Navbar1" mode={mode} toggleMode={toggleMode}/>

<Alert alert={alert}/>
      <br/>
      <br/>
    <div className="container my-3">
    <TestForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />
    {/* <About/> */}
    </div>
    </>
   
  );
}

export default App;
