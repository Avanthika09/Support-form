import React from 'react'
import {db} from './firebaseConfig'
import { useState } from 'react'
import{addDoc,collection} from 'firebase/firestore'


const Contact = () => {
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[message,setMessage]=useState();
  
  const userCollectionRef =collection(db,"contactdata")
  const handleSubmit=() => {
    addDoc(userCollectionRef,{
      name:name,
      email:email,
      message:message
    }).then(()=>{
      var pattern=/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
      if(!email.match(pattern))
      {
        alert("Entered email is incorrect");
      }
      else{
        alert("Form Submitted Successfully!");document.location='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiHmszjkIH9AhV_CrcAHaXWDSkQPAgI'
      }
      //document.location='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiHmszjkIH9AhV_CrcAHaXWDSkQPAgI'
    }).catch((error)=> {
      alert(error.message)
    })
   
  }
  function f(){
    document.getElementById("sh").innerText="helll"
  }
  // const valid=() =>{
    
  //   var pattern=/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
  //   if(!email.pattern)
  //   {
  //     alert("Correct email");
  //     return true;
  //       }
  //       else{
  //         alert("incorrect");
  //         return false;
  //       }
   
  // }
  // function validateEmail(){
  //   email.style.bottom='45px';
  //   if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
  //       email.innerHTML="PLEASE ENTER VALID EMAIL";
  //       return false;
  //   }

  // }
  


  return (
    <div className='outer-container'>
      <p>Contact Form</p>

      <form className='contactform'>
        <label id="sh" onClick={f}>Full name</label>
        <input type={'text'} placeholder="Enter your full name"
        onChange={(event)=>{
          setName(event.target.value);
        }}/>

        <label>Email</label>
        <input type={'email'} placeholder="Enter your email"
        onChange={(event)=>{
          setEmail(event.target.value)
        }}
        />


        
       

        <label>Enter Query/Feedback</label>
        <textarea type={'text'} placeholder="Enter your query/feedback"
        onChange={(event)=>{
          setMessage(event.target.value);
        }}>
        </textarea>


      </form>

      <button onClick={handleSubmit}>Submit</button>
     
    </div>
  )
}

export default Contact
