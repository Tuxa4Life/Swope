import React, { useState, useEffect } from "react";
import Register from "./Sub-forms/Register";
import LogIn from "./Sub-forms/LogIn";
import Link from "./Link";
import styles from '../Assets/Styles/form.css'

const MainForm = () => {
    const [formState, setFormState] = useState(true)

    useEffect(() => {
        document.title = 'Authorization'

        return () => {
            document.title = 'Document'
        }
    }, [])

    const renderForms = () => {
        if (formState) {
            return <LogIn formState={formState} setFormState={setFormState}/>
        } else {
            return <Register formState={formState} setFormState={setFormState}/>
        }
    }

    return (
        <div style={styles} className="ui container">
            <h3 style={{marginTop: '10px'}}>To continue service, please</h3>
            { renderForms () }
            <div className="hr-wrapper">
                <hr />
                <p>or</p>
                <hr />
            </div>
            <div className="form-btn-holder">
                <Link href={'/facebook'}> 
                    <button className="ui button primary inverted"><i className="icon facebook"></i> Login With Facebook</button>
                </Link>
                <Link href={'/google'}>
                    <button className="ui button"><i className="icon google"></i> Sign in With Google</button>
                </Link>
            </div>
        </div>
    )
}

export default MainForm;