import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const App = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let randInt = Math.floor(Math.random() * (999 - 100 + 1)) + 100

    let register = () => {
        emailjs.send('gmail-react', 'template_ahlb4b3', 
        {
            _email: email,
            _code: randInt,
        }, '-ULgQTRPj8f-lNNg0')
        .then(function() {
            alert('sent', randInt)
        }, function(error) {
            alert('Authentication failed... please try again', error)
        }
    );
    }

    return (
        <div>
            <input type="text" onChange={e => setEmail(e.target.value)} value={email}/>
            <input type="text" onChange={e => setPassword(e.target.value)} value={password}/>
            <button onClick={register}>Register</button>
        </div>
    )
}

export default App;