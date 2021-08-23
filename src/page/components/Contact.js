import React, { useState } from 'react';
import { validateEmail } from '../helpers';

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
        <div>
            <form className="contact-me">
                <input value={name} name="name" onChange={handleInputChange} onBlur={handleInputBlur} type="text" placeholder="name" />
                <br></br>
                <input value={email} name="email" onChange={handleInputChange} onBlur={handleInputBlur} type="email" placeholder="email" />
                <br></br>
                <textarea>
                    <input value={message} name="message" onChange={handleInputChange} onBlur={handleInputBlur} type="message" placeholder="message" />
                </textarea>
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