import React, { useState } from "react";
import axios from "axios";

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
            let d = new Date()
            let date = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`
            let id = Date.now() * Math.random()
            axios ({
                method: 'post',
                url: 'https://v1.nocodeapi.com/tuxa/google_sheets/xQtvMBfFFgfpISRL?tabId=Sheet1', 
                params: {},
                data: [[id, name, email, password, date]]
            }).then(function (response) {
                setButtonVal('Registered!')
                console.log(response.data);
            }).catch(function (error) {
                alert('Authentication Failed... Please try again', error)
                setButtonVal('Register')
                console.log(error); 
        })
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