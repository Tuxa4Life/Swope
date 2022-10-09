import React from "react";

const Alert = ({title, desc, onClose}) => {
    return (
        <div style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100vh',
            backdropFilter: 'blur(5px)',
            zIndex: '10',
        }} className="backround ui">
            <div style={{
                background: 'white',
                width: '300px',
                height: '200px',
                border: '1px black solid',
                borderRadius: '5px',
                position: 'fixed',
                top: '40%',
                left: '50%',
                width: '100%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }} className="card">
                <h1 style={{margin: '0px 10px'}}>{title}</h1>
                <pn style={{margin: '0px 10px'}}>{desc}</pn>
                <button style={{width: '30%', marginLeft: '65%'}} className="ui button" onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Alert;