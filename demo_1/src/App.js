import React from 'react';
import TextArea from './components/TextArea';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
 
  
  return (
    
  <div>
   <Navbar title='DemoPage'/>
     <div className ='container my-3'>
    <TextArea heading='Enter The Text Here'  />
     </div>
     <div>
       <About/>
     </div>
  </div>
  );
}


export default App;
