import React, { useState } from "react";

const LogIn = ({formState, setFormState}) => {
    const [redBorder, setRedBorder] = useState(false)

    const sendRedBorders = (e) => {
        e.preventDefault()
        setRedBorder(true)
    }

    return (
        <form onSubmit={sendRedBorders} className="ui form">
                <h2 className="title">Login</h2>
                <div className="field">
                    <label>Email:</label>
                    <input className={`${redBorder ? 'red-border' : ''}`} type="email"/>
                </div>
                <div className="field">
                    <label>Password:</label>
                    <input className={`${redBorder ? 'red-border' : ''}`} type="password"/>
                </div>

            <button className="ui submit button blue">Log in</button>
            <button type="button" onClick={() => window.location.reload()} className="ui button">Cancel</button>

            <span>Don't have account? <a style={{cursor: 'pointer'}} onClick={() => setFormState(!formState)}>Join us here</a></span>
        </form>
    )
}

export default LogIn;