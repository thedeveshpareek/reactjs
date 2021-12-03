import React,{useState} from 'react'
import { Button } from 'react-bootstrap';



const Textarea= (props) => {
  //using the states
  const[text,setText]=useState('Enter Text Here');
  
  //onclick
  const handleOnUp=()=>{
    console.log("On Click" + text);
   let newText = text.toLocaleUpperCase;
    setText( newText);
  }
  
  // to remove the text
  const handleOnRemove=()=>{
    // console.log("on click");
  let Text=(" ");
  setText(Text);
  }

  //to inverse the texxt

  const handleOninverse=()=>{
    // console.log("on click");
  // let T=text.reverse();
 let T = text.split("").reverse().join("");
  setText(T);
  }

  //changing when we enter something
  const handleOnChange =(event)=>  {
    console.log("ON change");
    setText(event.target.value);
  }
    return (
    <div>
        <div className="conatiner">
          <div>
              <h1>{props.heading}</h1>
              <textarea className="form-control" value={text} onChange={handleOnChange} id ='box' rows='10'></textarea>
          </div>
          <Button className="btn.btn.primary mx-1" onClick={handleOnUp} >uppercase</Button>
          <Button variant="danger"className="btn.btn.secondary mx-1" onClick={handleOnRemove}>Remove</Button>
          <Button variant="dark"className="btn.btn.ternary mx-1" onClick={handleOninverse}>Reverse</Button>

        </div>

        <div  className='conatiner'>
          <h2>Your text summary</h2>
          <p> {text.split(" ").length} words and {text.length} characters </p>  
          <p>{0.08*text.split(" ").length} minutes to read</p>
        </div>


   </div>
    )
}

export default Textarea
