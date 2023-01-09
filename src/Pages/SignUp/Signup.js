import React from "react";
import './style.css'


const Signup = () => {



    return (
        <div className="signup-back">
            <h1 className="signup">Login</h1>
                <div><label>Name</label>
                <input type="text" className="name" id="name" name="name"></input></div>
                <div>
                    <label>Email-Id</label>
                    <input type="email" className="email" id="email" name="email"></input></div>
                
        </div>
    )
}

export default Signup