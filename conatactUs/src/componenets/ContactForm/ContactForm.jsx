import React from 'react'
import styles from "./ContactForm.module.css"
import Button from '../Button/Button'
import {MdMessage} from "react-icons/md"
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import { useState } from 'react'
const ContactForm = () => {

  // const [name,setName] = useState("Namaiwa")
  // const [email,setEmail] = useState("example Mail")
  // const [text,setText] = useState("example Mail")

  

  // const onSubmit = (event) => {
  //      event.preventDefault()
  //     setName(event.target[0].value)
      
  //     setEmail(event.target[1].value)
  //     setText(event.target[2].value)
  // }

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_button}>
            <Button
            text ="VIA SUPPORT CHAT"
            icon ={<MdMessage fontSize="24" />}
            />
            <Button
            
            text ="VIA CALL"
            icon ={<FaPhoneAlt fontSize="24"/>}
            />
            </div>
            <Button
            isOutline = {true}
            text ="VIA EMAIL FORM"
            icon ={<HiMail fontSize="24"/>}
            />
            <form onSubmit={onSubmit}>
              <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' />
              </div>
              <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' />
              </div>
              <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea name='text' rows="8" />
              </div>
              <div className={styles.submit_btn}>
              <Button
            text ="SUBMIT BUTTON" />
              </div>
              {/* <div>{name +" / " + email + " / " +text }</div> */}
            </form>
        </div>
        <div className={styles.contact_image}>
          <img src="/images/contact1.svg" alt="contact image" />
        </div>
    </section>
  );
};

export default ContactForm