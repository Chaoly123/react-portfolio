import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.Value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    }

    const handleInputBlur = (e) => {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required`);
        } else {
            setErrorMessage('');
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage('Need to enter a valid email.');
            return;
        } else if (!name.length || !email.length || !message.length) {
            setErrorMessage('Need to complete all required fields');
            return;
        }
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className="row justify-content-center">

            <form className="contact-me">
                <div className="col 5">
                    <div className="contact-me-group">
                        <label for="name">Name</label>
                        <input value={name} name="name" onChange={handleInputChange} onBlur={handleInputBlur} type="text" placeholder="Enter Your Name" />
                        <br></br>
                    </div>
                    <div className="contact-me-group">
                        <label for="email">Email</label>
                        <input value={email} name="email" onChange={handleInputChange} onBlur={handleInputBlur} type="email" placeholder="Enter Your Email" />
                        <br></br>
                    </div>
                    <div className="contact-me-group">
                        <label for="description">Description</label>
                        <textarea name="message" class="form-control" rows="4">
                            <input value={message} name="message" onChange={handleInputChange} onBlur={handleInputBlur} type="message" placeholder="message" />
                        </textarea>
                    </div>
                    <br></br>
                </div>
                        <button className="submit-btn" type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="warning" role="alert">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}

export default Contact;