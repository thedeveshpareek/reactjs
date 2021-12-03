import React,{useState} from 'react'


const About = () => {
    const [mystyle,setMyStyle]= useState({
        color:'cyan',
        backgroundColor:'dark',
})
const toggleStyle=()=>{
    if(mystyle.color==='white'){
        setMyStyle({
            color:'black',
            backgroundColor:'white'
        })
    }
    else{
        setMyStyle({
            color:'white',
            backgroundColor:'black'
        })
    }
}
    return (
        <div>
            <div calssName="container" style={mystyle}>
                <h1 className="my-3">About Us</h1>
                <div calssName='accordion'>
                    <p>
                        This is my first demo page using react. 
                    </p>
                    <button onClick={toggleStyle} type="button" className="btn btn-primary mx-5">Enable dark mode</button>
                </div>
            </div>
        </div>
    )
}

export default About
