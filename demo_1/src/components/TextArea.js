import React,{useState} from 'react'
import { Button } from 'react-bootstrap';



const Textarea= (props) => {
  //using the states
  const[text,setText]=useState('Enter Text Here');
  
  //onclick
  const handleOnUp=()=>{
    console.log("On Click" + text);
   let newText = text.toUpperCase();
    setText( newText);
  }
  
  //to remove the text
  // const handleOnRemove=()=>{
  //   console.log("on click");
  
  // }

  //changing when we enter something
  const handleOnChange =(event)=>  {
    console.log("ON change");
    setText(event.target.value);
  }
    return (
        <div>
          <div>
              <h1>{props.heading}</h1>
              <textarea className="form-control" value={text} onChange={handleOnChange} id ='box' rows='10'></textarea>
          </div>
          <Button className="btn.btn.primary" onClick={handleOnUp} >uppercase</Button>
          {/* <Button variant="danger"className="btn.btn.secondary" onClick={handleOnRemove}>Remove</Button> */}
        </div>
    )
}

export default Textarea
