import {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import "./PopUp.css";

 function Contact() {
  const [user_email, setUser_email] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [resMessage, setResMessage] = useState('');

  const form = useRef();

  const user_emailHandler = (e)=>{
    setUser_email(e.target.value);
  }
  const messageHandler = (e)=>{
    setMessage(e.target.value);
  }
  const subjectHandler = (e)=>{
    setSubject(e.target.value);
  }


  const handleFormSubmit = (e)=>{
    e.preventDefault();
    console.log(`${user_email}------${message}-----${subject}`);

    const templateParams = {
      user_email,
      subject,
      message
    }

    emailjs.send(process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      templateParams, 
      process.env.REACT_APP_PUBLIC_KEY
    )
    .then( (response)=>{
      console.log("email sent successfully", response);
      setIsPopUpVisible(true);
      setResMessage('Email is sent successfully!')
      setUser_email('');
      setSubject('');
      setMessage('');
    })
    .catch( (err)=>{
      console.log(`Failed to send email`,err);
      setIsPopUpVisible(true);
      setResMessage('Failed to send email! Please try again.');
    });

    console.log(isPopUpVisible);
  }


    return ( 
        <div className="contact-container">

              { isPopUpVisible &&(
                <div className="popup-overlay" >
                    <div className="popup-content">
                      <span className="popup-message">{resMessage}</span>
                      <br/>
                      <button className="popup-close-button" onClick={ ()=> setIsPopUpVisible( false)}>
                        Close
                      </button>
                    </div>
                </div>
             )
             }

             <h2>Ask Me!</h2>
             <form ref={form} className="contact-form" onSubmit={ handleFormSubmit }>
               <label>Email</label>
               <input 
                   type="email" 
                   name="user_email" 
                   value={user_email}
                   required 
                   placeholder="Enter your email" 
                   onChange={ user_emailHandler }
               />

               <label>Subject</label>
               <input 
                   type="text" 
                   name="subject" 
                   value={subject}
                   required 
                   placeholder="Enter your email" 
                   onChange={ subjectHandler }
               />
               
               <label>Message</label>
               <textarea 
                   name="message" 
                   required placeholder="Your message" 
                   onChange={ messageHandler }
                   value={message}
               />
               
               <button type="submit">Send</button>
             </form>
        </div>
    );
 }
 
 export default Contact;