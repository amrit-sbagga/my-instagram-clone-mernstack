import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const postData = () => {
      fetch("/signup",
            {
                method: "post",
                headers : {
                  "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                  name:"",
                  password : "",
                  email: ""
                })
        }).then(response => response.json())
        .then(data => {
           console.log(data);
        })
  }

    return (
      <div className="mycard">     
        <div className="card auth-card input-field">
          <h2>Instagram</h2>
          <input type="text" 
                 placeholder="name"
                 value={name}
                 onChange = {(e) => setName(e.target.value)}/>
          <input type="text" 
                 placeholder="email"
                 value={email}
                 onChange = {(e) => setEmail(e.target.value)}/>
          <input type="text" 
                 placeholder="password"
                 value={password}
                 onChange = {(e) => setPassword(e.target.value)}/>
          <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
             onClick = {() => postData()}>
            Signup
          </button>
          <h5>
            <Link to="/signin">Already have an account?</Link>
          </h5>
        </div>
      </div>    
    )
}

export default Signup;