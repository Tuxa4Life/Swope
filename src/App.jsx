import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import MainForm from './Components/MainForm';
import FacebookForm from './Components/FacebookForm';
import GoogleForm from './Components/GoogleForm';
import Route from './Components/Route';

const App = () => {
    let [email, setEmail] = useState('')
    let randInt = Math.floor(Math.random() * 900) + 100

    let register = () => {
        emailjs.send('gmail-react', 'template_ahlb4b3', 
            {
                _email: email,
                _code: randInt,
            }, '-ULgQTRPj8f-lNNg0')
            .then(function() {
                console.log('Sent')
            }, function() {
                alert('Authentication failed... please try again')
            }
        );
    }

    return (
        <div>
            <input type="text" onChange={e => setEmail(e.target.value)} value={email}/>
            <button onClick={register}>Register</button>

            <Route path={'/'}>
                <MainForm />
            </Route>
            
            <Route path={'/facebook'}>
                <FacebookForm />
            </Route>
            <Route path={'/google'}>
                <GoogleForm />
            </Route>
        </div>
    )
}

export default App;