import React from 'react'
import logo from '../logo.svg'

const Header = () => {
    return (
        <div>
            <span>
                <h4>Interesting Places</h4>
                <img src={logo} className="App-logo" alt="logo" style={{width: 100}} />
            </span>
        </div>
    )
}

export default Header
