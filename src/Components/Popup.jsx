import React from 'react';

const Popup = (props) => {
    return (
        <div class="ui card">
            <div class="content">
                <div class="header">{props.title}</div>
            </div>
            <div class="content">
                <div class="ui icon input">
                    <input type="text" placeholder="John Doe" />
                    <i class="user icon"></i>
                </div>
                <div class="extra content">
                    <button class="ui button">Cancel</button>
                    <button onClick={props.onClickHandler} class="ui button">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Popup;