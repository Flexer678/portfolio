import React from 'react'
 import { useForm, ValidationError } from '@formspree/react';
import "../Styles/contact.css"
function Contact() {
 
  const [state, handleSubmit] = useForm("mjvnebwe");
  if (state.succeeded) {
      return (
        <div className='submission-page'>
          <h1>THANKS FOR SUBMITTING</h1>
        <h2>Now check out my projects</h2>
        </div>
      );
  }
  return (
    <div className='ContactContainer'>
      <div className='Title'>
      <h1>WANT TO HIRE ME!!!<span>or like my work</span></h1>
      <h3> Send an email</h3>
      </div>
      <div className='emailContainer'>
      <form onSubmit={handleSubmit}>
                <label>
                    <input type="email" name="enter your email" id="email"required className="email" placeholder="Enter your email"></input>
                     <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
                </label>
                <label>
                    <textarea required className="detailsInput" id="message"  name="message" placeholder="other things you want to let me know or tell me you like it" rows="" cols="" ></textarea>
                        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
                </label>
                <button className="submit-button" type="submit" disabled={state.submitting} >Send</button>
            </form>
       </div>
    </div>
  )
}

export default Contact
