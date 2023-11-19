import React, { useState } from "react";


function MenuSidebar()  {
    return (
        <div className="menuSidebar">
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
    )    
}


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
    const [showMenu, setShowMenu] =  useState(false);
    function MenuButton()  {
        return (
            <div className="menuButton" onClick={() => setShowMenu(cur => !cur)}>
                Menu
            </div>
        )
    } 
    
    return (
    <header className="App-header">
        <nav className="headerNav">
            <div className="headerLogo">
                <a href="/">
                    Building Sustainable Federalism
                </a>
            </div>
            <div className="headerLinks">
                <MenuButton />
                { showMenu ? <MenuSidebar /> : null }
            </div>
        </nav>
    </header>
    
    )
}
