import React from 'react';
import TextArea from './components/TextArea';
// import React-bootstrap from 'react-bootstrap'
// import { Navbar } from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
   <Navbar title='DemoPage'/>
   <div className ='container my-3'>
   <TextArea heading='Enter The Text'/>
   </div>
    </div>
  );
}

export default App;
