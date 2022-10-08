import React from 'react';

const Popup = (props) => {
    return (
        <div style={{
            position: 'fixed',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }} class="ui card">
            <div class="content">
                <div class="header">{props.title}</div>
            </div>
            <div class="content">
                <div class="ui icon input">
                    <input type="text" placeholder="John Doe" />
                    <i class="user icon"></i>
                </div>
                <div style={{marginTop: '5px'}} class="extra content">
                    <button onClick={props.onCancelClick} class="ui button">Cancel</button>
                    <button onClick={props.onSubmitClick} class="ui green button">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Popup;