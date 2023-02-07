import logo from './logo.svg';
import './App.css';
import { Button, TextField, Form } from '@mui/material';
import { useState } from "react";
import ReactDOM from 'react-dom/client';
// import { auth } from './firebase';
// import { app } from './firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth' ;
// import { async } from '@firebase/util';



function App() {

  const [name, setName] = useState("");
  const [number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // const handleSubmit = () =>{
  // getAuth
  // .createUserWithEmailAndPassword(handleSubmit, email, password, name, number)
  // .then(userCredentials => {
  //   const user = userCredentials.user;
  //   console.log('Register with:',user.email);
  // })
  // .catch(error => alert(error.message))
  // }

  const handleSubmit = getAuth();
  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  createUserWithEmailAndPassword(handleSubmit, email,password)
  .then((userCredentials) => {
    const user = userCredentials.user;
    console.log('Register with:',user.email);
  })
  .catch((error) => {
    alert(error.message)
    });
  
  return (
    <div className="App">
      <h1> CRUD </h1>
      <h2> Registration </h2>
    <div className="Form">

        {/* <Form onSubmit={handleSubmit}> */}

        <input type="email" 
        class="emailA"  
        placeholder="Enter your email here" 
        onChange={(e) => setEmail(e.target.value)}
        maxLength={30}/>

        <input class="name" 
        type="text" 
        placeholder="Enter your name here" 
        onChange={(e) => setName(e.target.value)}
        maxLength={20} />

        <input class="number" 
        type="number" 
        placeholder="Enter your phone number here" 
        onChange={(e) => setPhoneNumber(e.target.value)}
        maxLength={20} />

        <input class="passwordB" 
        type="password" 
        placeholder="Enter your password here" 
        required
        onChange={(e) => setPassword(e.target.value)}
        maxLength={20} />
        <input class="passwordA" 
        type="password" 
        placeholder="Enter your confirm password here" 
        maxLength={20} />

      {/* </Form> */}
      <Button class="btn-submit" 
       onclick={handleSubmit}>
       Register
      </Button>
      </div>
    </div>
  );
}

export default App;
