import React, {useState} from 'react';
import emailjs from 'emailjs-com'

import Footer from '../Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      })

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_ro0djge', 'template_x8hk63c', e.target, 'user_zV0aaGfql5j4Y8l0jcyF1')
        .then(res => {
            alert(`Hi ${formData.name}, your message is sent successfully, I will respond as soon as possible. Thank you !`)
        })
        .catch(err => {
            alert(`Hi ${formData.name}, your message is failed to send, please try again. Thank you !`)
        })
        setFormData({
            name: '',
            email: '',
            message: ''
        })  
    }

    return (
        <div className="contact">
            <div className="contact_container">
                <h2 className="contact_title">Get in Touch</h2>
                <p className='contact_info'>Have a question or want to work together ? Contact me via Linkedin or fill in this form, I will respond as soon as possible!</p>

                <form action="form" className="form" onSubmit={sendEmail}>
                    <label className="label-form" htmlFor="name">Name: </label>
                    <br></br>
                    <input 
                        className="form-input" 
                        type="text" 
                        name="name" 
                        placeholder="Enter your name..." 
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        value={formData.name}
                        required 
                    />
                    <br></br>
                    <label className="label-form" htmlFor="email">Email: </label>
                    <br></br>
                    <input 
                        className="form-input" 
                        type="text" 
                        name="user_email"
                        placeholder="Enter your email..." 
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        value={formData.email}
                        required />
                    <br></br>
                    <label className="label-form" htmlFor="email">Message: </label>
                    <br></br>
                    <textarea 
                        className="form-input message-box" 
                        name="message"
                        placeholder="Leave your message..."
                        onChange={e => setFormData({...formData, message: e.target.value})}
                        value={formData.message}
                        required
                    ></textarea>
                    <br></br> <br></br>
                    <button className="btn-send">Send</button>
                </form>

            </div>

            <Footer />
            
        </div>
    );
};

export default Contact;