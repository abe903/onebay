import React from 'react'
import '../css/nav.css'

function Nav() {
    return (
        <nav>
            <h2>ONE.BAY</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/donate">Donate</a></li>
            </ul>
        </nav>
    )
}

export default Nav
