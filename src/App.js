
import Navbar from './components/Navbar';
import './App.css';
import About from './components/About';
import TestForm from './components/TestForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const[mode, setMode] = useState("light");

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor= '#46144b';
      showAlert("Dark Mode has been Enabled", "Success");
      // document.title='TextCraft-Dark mode'
      // setInterval(()=>{
      //   document.title='TextCraft is Amazing';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextCraft Now';
      // },1500);
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
    <Router>
<Navbar title="Navbar1" mode={mode} toggleMode={toggleMode}/>

<Alert alert={alert}/>
      <br/>
      <br/>
    <div className="container my-3">
    <Switch>
      {/* /users --->component1
      /users/home --->component-2 */}
      {/* if not used exact keyword, it will always render to component1 */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TestForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
   
  );
}

export default App;
