import React, { useEffect, useRef } from 'react'

const NavBar = () => {
    const hamburgerRef = useRef(null)
    const navMenuRef = useRef(null)

    useEffect(() => {
        const hamburger = hamburgerRef.current
        const navMenu = navMenuRef.current

        const mobileMenu = () => {
            hamburger.classList.toggle("active")
            navMenu.classList.toggle("active")
        }

        hamburger.addEventListener("click", mobileMenu)

        return () => {
            hamburger.removeEventListener("click", mobileMenu)
        }
    }, []) // Empty dependency array ensures this effect runs only once on mount

    return (
        <div className='nav'> <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/logoNew.png" style={{ width: '100px' }} alt="prepr" />

            <ul className='nav-bar' ref={navMenuRef}>

                <li className="nav-item">Explore</li>
                <li style={{ position: 'relative' }}> <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', }} className="nav-item">
                    <span className="dropdown" >Dashboard</span>
                    <div className="hide" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '5px', position: 'absolute', padding: '10px', backgroundColor: "#fff", marginTop: '25px', display: 'none' }}>
                        <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/user.png" style={{ width: '20px', height: 'auto' }} /><span style={{ fontSize: '0.9rem' }}>User Dashboard</span></div>
                </div>
                </li>
                <li className="nav-item">My Challenges</li>
                <li className="nav-item">My Labs</li>
                <li className="nav-item">My Projects</li>
                <li className="nav-item">Career Explorer</li>
                <li className="nav-item"><img src="https://preprlabs.org/assets/images/header/bell-icon.svg" /></li>
                <li className="nav-item"><img src="https://preprlabs.org/assets/images/header/inbox-icon.svg" /></li>
                <li className="nav-item"><img src="https://preprlabs.org/assets/images/header/help-icon.svg" /></li>
                <li className="nav-item"><input type="text" className="nav-searchbar" placeholder='Search...' /></li>
                <li className="nav-item"><img style={{ width: '50px' }} src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/front/img/default-user.png" /></li>
            </ul>
            <div className="hamburger" ref={hamburgerRef}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    )
}

export default NavBar