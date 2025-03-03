import React, { useContext, useState } from 'react'
import {  FooterItemContext } from '../api/context/Footer'
import { Link } from 'react-router-dom';
import { GoMail } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoSend } from "react-icons/io5";



 export const FooterList = () => {
  const [email , setEmail] = useState("");
  const handleSubmit =()=>{
     
    setEmail("Thankyou for submit")
 
  console.log(handleSubmit);
  
  }
    const{ footer }=useContext(FooterItemContext);
    console.log(footer);

    const formData = [{
          
    Formdata: "Stay up to date",
    text: "Subscribe to our newsletter to get the latest updates and special offers",
    placeHold: "Enter your email address",


    }]
    
  return (
    <>
      <div className="container-footer">
        <div className="footer-content">
          <div className="footer-list">
            {footer.map((footers, index) => (
              <div className="footer-hole" key={index}>
                <ul>
                  <h2>{footers.title}</h2>
                  <li>
                    <Link className="link" to="/">
                      {footers.list1}
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/">
                      {footers.list2}
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/">
                      {footers.list3}
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/">
                      {footers.list4}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="form-footer">
            {formData.map((form, index) => (
              <div className="form-content" key={index}>
                <h3>
                  <GoMail /> {form.Formdata}
                </h3>
                <p>{form.text}</p>
                <input type="email" required placeholder={form.placeHold} />
                <div className="footer-btn">
                  <button type="submit" onClick={handleSubmit}>
                    <IoSend />
                  </button>
                </div>
                <p style={{ backgroundColor: "#c5e9c5" , borderRadius:"20px",textAlign:"center" }}>{email}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-icon">
          <div className="ciseco-foot">
            <p>&copy;2025Ciseco Hydrogen Main ,Inc.All rights reserved.</p>
          </div>
          <div className="icon-social">
            <FaFacebook className="facebook" />
            <AiFillTikTok className="tiktok" />
            <FaXTwitter className="twitter" />
            <FaYoutube className="youtube" />
          </div>
        </div>
      </div>
    </>
  );
}


