import React, {useRef, useState} from 'react'
import "./contact.css"
import Phone from "../../Img/phone.png"
import Email from "../../Img/email.png"
import Address from "../../Img/address.png"
import emailjs from 'emailjs-com';

export const Contact = () => {
    const formRef = useRef()
    const [done, setDone] =useState(false)
    const handleSubmit = e =>{
        e.preventDefault()
        emailjs.sendForm('service_9wjd1y8', 'template_ipy04n7', formRef.current, 'user_0teeq5Q5BfwaLYy2Mi6Aw')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
        console.log(error.text);
        });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Lets discous about your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="Phone" className="c-icon" />
                            +880 1517813516
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="Email" className="c-icon" />
                            abdulhay.me@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="Phone" className="c-icon" />
                            Roade-27, House-32, Rupnagor R/A, Mirpur, Dhaka-1216, Bangladesh.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus, excepturi iusto in nam inventore ullam sapiente laborum eligendi molestias.ssss
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Massage" name="massage"></textarea>
                        <button>Submit</button>
                        {done && "Send Successfully..."}
                    </form>
                </div>
            </div>
        </div>
    )
}
