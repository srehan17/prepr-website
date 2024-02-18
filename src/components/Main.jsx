import React from 'react'

const image = require('../images/image3.jpeg')
const searchIcon = require('../images/search.png')

const Main = () => {

    return (
        <div style={{ backgroundImage: `url(${image})`, height: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: '3rem' }}>Explore Your Interests</h1>
            <div className='small-font'>
                We'll recommend content based on your interests we’ve listed here.
            </div>
            <div className='small-font' style={{ marginBottom: '20px' }}>
                Feel free to add or remove topics to customize your experience!
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '80px', }} className='main-searchbar'>
                <img src={searchIcon} alt="search icon" style={{ width: '30px', padding: '7px', backgroundColor: 'white', cursor: 'pointer', border: ' 1px solid black' }} />
                <input style={{ width: '300px', height: '40px', outline: 'none', fontSize: '1.3rem', paddingLeft: '10px', }} />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', width: '500px', marginTop: '30px', textAlign: 'center' }}>
                Click an interest to narrow your recommendations.
            </div>
            <div className='tabs'>
                <div className='tab'>Prototyping</div>
                <div className='tab'>Influential Presentation</div>
                <div className='tab'>Pinterest Marketing</div>
                <div className='tab'>Enhancing Leadership Skills</div>
                <div className='tab'>Career Path Planning</div>
                <div className='tab'>Skills</div>
                <div className='tab'>Budget Management</div>
                <div className='tab'>Create SVG Graphics</div>
                <div className='tab'>Journaling</div>
                <div className='tab'>Food Manufacturing</div>
            </div>
        </div>
    )
}

export default Main