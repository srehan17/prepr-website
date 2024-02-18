import React from 'react'

const NavBar = () => {
    return (
        <ul className='nav-bar'>
            <li><img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/logoNew.png" style={{ width: '100px' }} alt="prepr" />
            </li>
            <li>Explore</li>
            <li style={{ position: 'relative' }}> <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', }}>
                <span className="dropdown" >Dashboard</span>
                <div className="hide" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '5px', position: 'absolute', padding: '10px', backgroundColor: "#fff", marginTop: '25px', display: 'none' }}>
                    <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/user.png" style={{ width: '20px', height: 'auto' }} /><span style={{ fontSize: '0.9rem' }}>User Dashboard</span></div>
            </div>
            </li>
            <li>My Challenges</li>
            <li>My Labs</li>
            <li>My Projects</li>
            <li>Career Explorer</li>
            <li><img src="https://preprlabs.org/assets/images/header/bell-icon.svg" /></li>
            <li><img src="https://preprlabs.org/assets/images/header/inbox-icon.svg" /></li>
            <li><img src="https://preprlabs.org/assets/images/header/bell-icon.svg" /></li>
            <li><img src="https://preprlabs.org/assets/images/header/help-icon.svg" /></li>
            <li><input type="text" className="nav-searchbar" placeholder='Search...' /></li>
            <li><img style={{ width: '50px' }} src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/front/img/default-user.png" /></li>
        </ul>
    )
}

export default NavBar