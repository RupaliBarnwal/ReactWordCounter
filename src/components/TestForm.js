import React,{useState} from 'react'

export default function TestForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        // console.log("Lowercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        // console.log("HandleOnChange");
        setText(event.target.value);
    }
    const clearText=(event)=>{
        // console.log("HandleOnChange");
        setText("");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        // msg.text = text;
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
      }
    const[text, setText]= useState("");
    // setText is a function to update text i.e variable
    // text="new text"; //wrong way to change text;
    // setText("new text"); //correct way to change text;
    
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>
</div> 
    <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={clearText} >Clear</button>

<button className="btn btn-primary mx-2 my-2"  onClick={speak} id="toggle" >Speak</button>
    </div>
    <div className="container my-3" >
        <h1> Your text summery</h1>
        <p>{text.split(" ").length}words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length } minutes takes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    

  )
}
