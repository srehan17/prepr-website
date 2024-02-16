import React from 'react'

const image = require('../images/image2.jpeg')

const Main = () => {
    return (
        <div style={{ backgroundImage: `url(${image})`, height: '550px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: '3rem' }}>Explore Your Interests</h1>
            <div className='small-font'>
                We’ll recommend content based on your interests we’ve listed here.
            </div>
            <div className='small-font' style={{ marginBottom: '20px' }}>
                Feel free to add or remove topics to customize your experience!
            </div>
            <input style={{ width: '50%', height: '60px' }} />
            <div style={{ fontSize: '2rem', fontWeight: 'bold', width: '500px', marginTop: '20px', textAlign: 'center' }}>Click an interest to narrow your recommendations.</div>
            <div className='tabs'>
                <div className='tab'>Prototyping</div>
                <div className='tab'>Influential Presentation</div>
                <div className='tab'>Pinterest Marketing</div>
                <div className='tab'>Enhancing Leadership Skills</div>
                <div className='tab'>Career Path Planning</div>
                <div className='tab'>Skills</div>
                <div className='tab'>Budget Management</div>
                <div className='tab'>Create SVG Graphics</div>
                <div className='tab'></div>
                <div className='tab'>Journaling</div>
                <div className='tab'>Food Manufacturing</div>
            </div>
        </div>
    )
}

export default Main