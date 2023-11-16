import React from "react";


/**
 * Homepage
People
Publications
Useful Links
Events
Contact

 * @returns 
 */
export default function AppHeader() {
    return (
    <header className="App-header">
        <nav className="headerNav">
            <div className="headerLogo">
                <a href="/">
                    LOGO
                </a>
            </div>
            <div className="headerLinks">
                <a className="headerAnchor" href="/People">
                    <p className="headerAnchorText">People</p>
                </a>
                <a className="headerAnchor" href="/Publications">
                    <p className="headerAnchorText">Publications</p>
                </a>
                <a className="headerAnchor" href="/Useful-links">
                    <p className="headerAnchorText">Useful Links</p>
                </a>
                <a className="headerAnchor" href="/Events">
                    <p className="headerAnchorText">Events</p>
                </a>
                <a className="headerAnchor" href="/Contact">
                    <p className="headerAnchorText">Contact</p>
                </a>
            </div>
        </nav>
    </header>
    
    )
}
