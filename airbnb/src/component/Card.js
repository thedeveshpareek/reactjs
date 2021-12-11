import React from 'react'

const card = () => {
    return (
        <div className="card">
            <img src="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="card-photo"/>
        <div className="stats">
                {/* <img src="https://images.unsplash.com/photo-1542665174-31db64d7e0e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhciUyMHNoYXBlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/> */}
                <span>* 5.0</span>
                <span>(6) </span>
                <span>india</span> 
            </div>
            <p>
                photo editng with us.
            </p>

        </div>
    )
}

export default card
