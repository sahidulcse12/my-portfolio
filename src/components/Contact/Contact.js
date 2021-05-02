import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_b7juvyl', e.target, 'user_cUMCX5Jz7v1XHQb5yhYuz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }



    return (
        <div class="container contact-section my-2" id="contact">
            <h2 className="text-uppercase py-3">contact form</h2>
            <form onSubmit={sendEmail}>
                <div className="form-group">
                    <input className="form-control" type="text" id="fname" name="user_name" placeholder="Your name.." />
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" id="email" name="user_email" placeholder="Your email.." />
                </div>
                <textarea className="form-control" id="subject" name="message" placeholder="Write something.." ></textarea>

                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;