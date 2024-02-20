import React from 'react'
import CardContainer from './CardContainer'

const skillsImage = require('../images/skills-image.png')
const labIcon = require('../images/lab_icon.svg')

export const labsArray = [
    {
        image: skillsImage,
        title: "Skills for Success Overview - Employee Cohort 5",
        labImage: labIcon,
        specs: "Private Lab · Last update: 2 weeks ago · Members: 33 · Duration: 5 + Days · Level: Beginner · Type: None · Mode: None",
        desc: "Skills for Success is an 8-week virtual learning program that unlocks your full potential and helps you build the “Skills for Success” that will help you in your current role and beyond. Through this program, you will become more T-shaped by developing your “Skills for Success” or soft skills in three key areas as determined through your personalized learning path. You will...",
        keywords: ["C-Suite", "Sales High Performance Sales Teams", "Marketing Communications Planning",
            "Marketing Material Creation", "Monitoring Performance", "Sales Performance", "Stock Market",
            "Strategy Implementation"
        ]
    }
]

const Labs = () => {
    return (
        <div>
            <h1>Labs</h1>
            <ul>{labsArray.map((lab, index) => {
                <li key={index}>
                    <CardContainer
                        image={lab.image}
                        title={lab.title}
                        labImage={lab.labIcon}
                        specs={lab.specs}
                        keywords={lab.keywords} />
                </li>
            })}
            </ul>
        </div>
    )
}

export default Labs