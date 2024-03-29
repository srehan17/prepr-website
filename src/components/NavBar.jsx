import React, { useEffect, useRef, useState } from 'react'

const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false)

    const hamburgerRef = useRef(null)
    const navMenuRef = useRef(null)
    useEffect(() => {
        const hamburger = hamburgerRef.current

        const mobileMenu = () => {
            toggleDropdown()
        }

        hamburger.addEventListener("click", mobileMenu)

        return () => {
            hamburger.removeEventListener("click", mobileMenu)
        }
    }, [])

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
        const navMenu = navMenuRef.current
        navMenu.classList.toggle("active")
    }
    return (
        <div className='nav'> <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/logoNew.png" style={{ width: '100px' }} alt="prepr" />
            <ul className='nav-bar' ref={navMenuRef}>
                <li className="nav-item">Explore</li>
                <li style={{ position: 'relative' }} className="nav-item dashboard-nav dropdown">
                    <div>Dashboard</div>
                    <div>
                        <div className="dropdown-content">
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <img width='30px' src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/user.png" />
                                <span>User Dashboard</span>
                            </div>
                        </div>
                    </div>
                </li >
                <li className="nav-item">My Challenges</li>
                <li className="nav-item">My Labs</li>
                <li className="nav-item">My Projects</li>
                <li className="nav-item">Career Explorer</li>
                <li className="nav-item"><img src="https://preprlabs.org/assets/images/header/bell-icon.svg" /></li>
                <li className="nav-item"><img src="https://preprlabs.org/assets/images/header/inbox-icon.svg" /></li>
                <li className="nav-item"><img src="https://preprlabs.org/assets/images/header/help-icon.svg" /></li>
                <li className="nav-item"><input type="text" className="nav-searchbar" placeholder='Search...' /></li>
                <li className="nav-item"><img style={{ width: '50px' }} src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/front/img/default-user.png" /></li>
            </ul >
            <div className="hamburger" ref={hamburgerRef}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div >
    )
}

export default NavBar