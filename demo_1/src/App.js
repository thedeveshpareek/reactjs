import React ,{useState} from 'react';
import TextArea from './components/TextArea';
import { BrowserRouter as Routes, Route} from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import  Alert  from './components/Alert';


function App() {
const[alert,setalert]=useState(null);
const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
}



return (
    
  <div>
   <Navbar title='Text Analyzer' />
   <Alert alert={alert} Alert={showAlert}/>
     <div className ='container my-3'>
    <TextArea heading='Enter The Text Here' />
     </div>
   <Routes>
     {/* <Route exact path="/" component={Home} /> */}
      <Route path="/about" component={About} />
  </Routes>
    
  </div>
  );
}


export default App;
