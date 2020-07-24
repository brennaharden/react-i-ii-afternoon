import React from 'react';

const Nav = props => {
    
    return (
        <div className="nav">
            <div>
                <button onClick={props.previousChange}>{'< Previous'}</button>
                <button onClick={props.nextChange}>{'Next >'}</button>
            </div>
        </div>
    )
}

export default Nav