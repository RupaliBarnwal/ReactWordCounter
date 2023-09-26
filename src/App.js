
import Navbar from './components/Navbar';
import './App.css';
import TestForm from './components/TestForm';

function App() {
  return (
    <>
<Navbar title="Navbar1"/>
<br/>
      <br/>
    <div className="container my-3">
    <TestForm heading="Enter the text to analyse"/>
    </div>
    </>
   
  );
}

export default App;
