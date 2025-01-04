import React, { useState } from 'react';
import SocialLinks from './SocialLinks';
import { database } from './firebase'; // Import the database
import { ref, set } from 'firebase/database'; // Import functions to interact with the database

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const { name, email, subject, message } = formData;

        // Push data to Firebase
        set(ref(database, 'contacts/' + name), {
            name,
            email,
            subject,
            message,
        })
        .then(() => {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
        })
        .catch((error) => {
            alert('Error sending message: ' + error.message);
        });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Contact <span>Me</span></h2>
                    <p>Let's Work Together</p>
                    <p><strong>Email:</strong> Kumarsom699@gmail.com</p>
                    <p><strong>Phone:</strong> 9568582908</p>
                    <div className="social-links">
                        <SocialLinks />
                    </div>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Enter Your Name" 
                            value={formData.name}
                            onChange={handleChange} 
                            required 
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter Your Email" 
                            value={formData.email}
                            onChange={handleChange} 
                            required 
                        />
                        <input 
                            type="text" 
                            name="subject" 
                            placeholder="Enter Your Subject" 
                            value={formData.subject}
                            onChange={handleChange} 
                            required 
                        />
                        <textarea 
                            name="message" 
                            placeholder="Enter Your Message" 
                            value={formData.message}
                            onChange={handleChange} 
                            required
                        ></textarea>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
