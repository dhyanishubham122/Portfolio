import React, { useState } from 'react'
import "./Contact.css"
import { ImLinkedin  } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
function Contact() {
  const[formData, setFormData]= useState({
    name:"",
    email:"",
    message:""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_accv2d4', 'template_jkwa624', formData, '4H4oKqdZ2Qb3mF4ZA')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (err) => {
        console.error('FAILED...', err);
        alert('Failed to send message, please try again.');
      });
  };
  return (
    <div className='contact'>
      <div className='info'>
          <input type='text' className="text"  name='name' placeholder='Name'   value={formData.name}
          onChange={handleChange} />
          <input type='email' className="email"  name='email' placeholder='Email' id='email'  value={formData.email}
          onChange={handleChange}/>
      </div>
      <textarea id="message" name="message" rows="4" cols="50" placeholder='Message'    value={formData.message}
        onChange={handleChange}/>
     <button type='submit' className='sbutton'onClick={handleSubmit} >Send Message</button>
     <div className='cicons'>
     <ImLinkedin />
     <FaGithub />
     </div>
    </div>
  )
}

export default Contact
