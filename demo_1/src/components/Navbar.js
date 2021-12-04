import React from 'react'


const Navbar = (props) => {
  
return (
    
        <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        {/* <a className="nav-link" href="/">About us</a> */}
        {/* dark mode button  */}
        {/* <button  type="button" onClick={toggleStyle} className="btn btn-primary mx-9">Enable dark mode</button> */}
        {/* <a className="nav-link" href="/">Pricing</a>
        <a className="nav-link disabled">Disabled</a> */}
       </div>
       {/* //switch button  */}
       {/* <div className="form-check form-switch">
  <input align="right" className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">mode</label>
</div> */}
    </div>
  </div>
</nav>
      
      
    
        </div>
    )
}

export default Navbar
