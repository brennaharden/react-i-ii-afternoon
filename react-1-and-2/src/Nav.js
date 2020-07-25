import React from 'react';

const Nav = props => {
    
    return (
        <div className="nav">
                <h4 onClick={props.previousChange}>{'< Previous'}</h4>
                <div className="dummies">
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>New</button>
                </div>
                <h4 onClick={props.nextChange}>{'Next >'}</h4>
        </div>
    )
}

export default Nav