import React, { useState } from 'react'
import './Contact.css'
import { assets } from '../../../../assets/assets';
// import msg_icon from '../../../../assets/msg-icon.png'
// import mail_icon from '../../../../assets/mail-icon.png'
// import phone_icon from '../../../../assets/phone-icon.png'
// import location_icon from '../../../../assets/location-icon.png'
// import white_arrow from '../../../../assets/white-arrow.png'

const Contact = () => {
//     const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "61583224-c9e1-4982-bd3b-56927d62c0d9");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
    
// };
const [result, setResult] = useState("");
const onSubmit =async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);
  formData.append("access_key","61583224-c9e1-4982-bd3b-56927d62c0d9");

  const response = await fetch("https://api.web3forms.com/submit",{
    method:"POST",
    body:formData
  });
  const data = await response.json();
  if(data.success){
    setResult(data.message);
    event.target.reset();

  }
  else{
    setResult(data.message);
  }
  
  
};


  return (
    <div className='contact'>
        <div className="contact-col">
            <div>
              <h3>Send us a message </h3> 
                <img src={assets.msg_icon} alt="" />
            </div>
            <p>Feel free to reach out through contact form or find our contact information below. 
               Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>

            <ul>
                <li>
                    <img src={assets.mail_icon} alt="" />
                    elqudsschool@yahoo.com</li>
                <li>
                    <img src={assets.phone_icon} alt="" />
                    03-5170548 / 5170547 / 5170549</li>
                <li>
                    <img src={assets.location_icon} alt="" />
                    Moustafa Kamel St., Off 45 St. Miami<br/> Alexandria, Egypt.</li>
            </ul>

            
        </div>
        <div className="contact-col">
            <form action="" onSubmit={onSubmit}>
                <label>Your name </label>
                <input type="text" name='name'placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type='tel' name='phone'placeholder='Enter your mobile number' required/>
                <label>Your Email</label>
                <input type='email' name='email'placeholder='Enter your email id' required/>
                <label>Write your messages here</label>
                <textarea name="message" rows={6} id="" placeholder='Enter Your message' required></textarea>
                <button className='btn dark-btn' >
                    Submit now
                   

                </button>
            </form>
            <span>{result}</span>

        </div>
        
      
    </div>
  )
}


export default Contact
