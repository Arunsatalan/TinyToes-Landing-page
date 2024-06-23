import React, { useState } from 'react'
import './Parent.css'
import axios from 'axios';
import mar3 from '../assets/Group1.png'
import mar4 from '../assets/Group2.png'
import mar5 from '../assets/Group3.png'
import mar6 from '../assets/Group4.png'
import mar7 from '../assets/Group5.png'
import mar8 from '../assets/Group6.png'


import image2 from '../assets/a1.png'
import image3 from '../assets/g1.png'
import Marquee from "react-fast-marquee"

import { useNavigate } from 'react-router-dom'

const Parent = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');

 

  const handleChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
  };
  console.log(email);
  


    const otpButton = async () => {
      try{
      const response =  await axios.post('http://localhost:3000/php/login.php',{email},
                        {headers: {'Content-Type' :'application/json'},}

      );
      console.log(response.data);
      navigate('/otp')
    }catch(error){
      console.error('There was an error!', error);
    }
    };

  
  return (
    <div className="parent">
        <div className="parent1">
            <h2>Daycares in Srilanka</h2>
            <p>
            In Sri Lanka, daycare centers cater to the needs of working parents by providing safe and nurturing environments for children. These centers offer various services, including early childhood education, nutritious meals, and supervised playtime. With a focus on child development and socialization, daycare facilities in Sri Lanka often incorporate cultural and educational activities into their programs. Many centers also prioritize safety and hygiene standards, ensuring a healthy environment for children to thrive. From urban centers to rural communities, daycare options in Sri Lanka aim to support families by providing quality care and early childhood education opportunities for their children.
            </p>
            <Marquee className='marquee' pauseOnHover> 
              
              <div className="img-marquee">
                <img src={mar3} alt="" />
              </div>
              <div className="img-marquee">
                <img src={mar4} alt="" />
              </div>
              <div className="img-marquee">
                <img src={mar5} alt="" />
              </div>
              <div className="img-marquee">
                <img src={mar6} alt="" />
              </div>
              <div className="img-marquee">
                <img src={mar7} alt="" />
              </div>
              <div className="img-marquee">
                <img src={mar8} alt="" />
              </div>
            </Marquee>
        </div>
        
        <div className="parent2">
            <h3>Your email or Phone number</h3>
            <input type="search" name="" id="subscribe" value={email} onChange={handleChange} placeholder='Email or User name'/>

            <button className="button" onClick={otpButton}>Login</button>
            <div className="or">
                <hr />
                <p>or</p>
                <hr />
            </div>
            <button className = 'sign-button'><img src={image3} alt="" />Continue with Google</button>
            <button className = 'sign-button'><img src={image2} alt=""/>Continue with Apple</button>
            <div className="parent3">
                <p>Don't have an account?</p>
                <p className = "signup">Sign up</p>
            </div>
        </div>
    </div>
  )
}

export default Parent;