import { useState } from "react"; 
import "./contact.css";
 
function Contact() { 
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "" 
  }); 
 
  function handleChange(e) { 
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    }); 
  } 
 
  async function handleSubmit(e) { 
    e.preventDefault(); 
 
    await fetch("https://rentiva-v2.onrender.com", { 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json" 
      }, 
      body: JSON.stringify(formData) 
    }); 
 
    alert("Form submitted"); 
  } 
 
  return ( 
    <div className="contact" id="contacts"> 
      <h1>Contact Us</h1> 
 
      <form className="contact-form" onSubmit={handleSubmit}> 
        <input 
          name="name" 
          placeholder="Name" 
          onChange={handleChange} 
        /> 
 
        <input 
          name="email" 
          placeholder="Email" 
          onChange={handleChange} 
        /> 
 
        <textarea 
          name="message" 
          placeholder="Message" 
          onChange={handleChange} 
        /> 
 
        <button type="submit">Send</button> 
      </form> 
    </div> 
  ); 
} 
 
export default Contact; 
