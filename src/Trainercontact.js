import React, { useState } from 'react';
import Navbar from './Navbar';
import TrainerNav from './Trainernav';

function Trainercontact() {
  const[username,setUsername]=useState('');
  const[emailid,setEmailid]=useState('');
  const[mobile,setMobile]=useState('');
  const[message,setTextarea]=useState('');

function submit(){
    if(username===''){
      alert("enter the name");
      document.getElementById('name').style.borderColor='red';
    }else if(emailid===''){
      alert("Enter the mailid");
      document.getElementById('email').style.borderColor='red';
    }else if(mobile===''){
      alert("enter the contact number");
      document.getElementById('subject').style.borderColor='red';
    }else if(message===''){
      alert("message cannot be empty");
      document.getElementById('email_body').style.borderColor='red';
    }else{
      alert("Message sent successfully");
      document.getElementById('authentication').innerHTML='Message sent successfully';
      document.getElementById('authentication').style.color='green';
      document.getElementById('authentication').style.fontSize='20px';
      document.getElementById('subject').style.borderColor='green';
      document.getElementById('email_body').style.borderColor='green';
      document.getElementById('email').style.borderColor='green';
      document.getElementById('name').style.borderColor='green';
    }
}


  return (
    <>
    <TrainerNav/>
    <div className="container bg-body-secondary mt-5 pb-2 rounded">
      <div className="row">
        <div className="col align-self-center">
          <h1 className="text-center">Send us a message</h1>
          
            {/* <!-- name --> */}
            <div class="form-group p-2">
              <label for="name" className='fw-bold'>Name</label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
                placeholder="enter your name" onChange={(e)=>setUsername(e.target.value)}
              />
            </div>

            {/* <!-- email --> */}
            <div className="form-group p-2">
              <label for="email" className='fw-bold'>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="enter your email" onChange={(e)=>setEmailid(e.target.value)}
              />
            </div>

            {/* <!-- subject --> */}
            <div className="form-group p-2">
              <label for="subject" className='fw-bold'>Phone No</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="enter the Mobile number" onChange={(e)=>setMobile(e.target.value)}
              />
            </div>

            <div className="form-group p-2">
              <label for="email_body" className='fw-bold'>Message</label>
              <textarea
                className="form-control"
                id="email_body"
                rows="5" onChange={(e)=>setTextarea(e.target.value)}
              ></textarea>
            </div>
            <span id='authentication'></span>
            <div className='mx-auto text-center mt-3'>
            <button onClick={submit} className="btn btn-primary ps-4 pe-4 mt-2 text-center">
              Submit
            </button>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Trainercontact;
