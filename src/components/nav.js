import React from 'react'
import '../css/nav.css'

function Nav() {
    return (
        <nav>
            <h3>ONE.BAY</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">Events</a></li>
                <li><a href="/events">About</a></li>
            </ul>
        </nav>
    )
}

export default Nav
