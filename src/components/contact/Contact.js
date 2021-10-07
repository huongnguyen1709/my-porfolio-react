import React from 'react';
import Footer from './Footer';
import NavBar from '../home/NavBar';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact_container">
                <h2 class="contact_info--title">Get in Touch</h2>
                <h3><i class="fas fa-phone-square-alt"></i> +358 46 628 5973</h3>
                <h3><i class="far fa-envelope"></i> huongnguyen.nth1709@gmail.com</h3>
                <ul class="socialmedia">
                    <li><a href="https://www.facebook.com/nguyenthuhuong.1709" target="_blank" rel="noreferrer"><i
                        class="fab fa-facebook-square icon"></i></a></li>
                    <li><a href="https://github.com/huongnguyen1709" target="_blank" rel="noreferrer"><i
                        class="fab fa-github-square github icon"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/huongnguyen1709/" target="_blank" rel="noreferrer"><i
                        class="fab fa-linkedin icon"></i></a></li>
                </ul>
            </div>

            <Footer />
            
        </div>
    );
};

export default Contact;