import React, { useState } from 'react'
import { Box, Tab, Tabs, Typography } from "@mui/material"
import CardContainer from './CardContainer'
import Labs from './Labs'

const TabsContainer = () => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0)
    const handleTabChange = (e, tabIndex) => {
        console.log(tabIndex)
        setCurrentTabIndex(tabIndex)
    }

    return (
        <React.Fragment>
            <Tabs
                value={currentTabIndex}
                onChange={handleTabChange}
                variant="fullWidth"
            >
                <Tab label='Labs' className="tab-label" />
                <Tab label='Challenges' className="tab-label" />
                <Tab label='Resources' className="tab-label" />
                <Tab label='Projects' className="tab-label" />
            </Tabs>

            {/* TAB 1 Contents */}
            {currentTabIndex === 0 && (
                <Box sx={{ p: 3 }}>
                    <Labs />
                </Box>
            )}

            {/* TAB 2 Contents */}
            {currentTabIndex === 1 && (
                <Box sx={{ p: 3 }}>
                    <Typography variant='h5'>Challenges</Typography>
                    <Typography variant='p'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                    </Typography>
                </Box>
            )}

            {/* TAB 3 Contents */}
            {currentTabIndex === 2 && (
                <Box sx={{ p: 3 }}>
                    <Typography variant='h5'>Resources</Typography>
                    <Typography variant='p'>
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content
                        here', making it look like readable English.
                    </Typography>
                </Box>
            )}

            {/* TAB 4 Contents */}
            {currentTabIndex === 3 && (
                <Box sx={{ p: 3 }}>
                    <Typography variant='h5'>Projects</Typography>
                    <Typography variant='p'>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                        below for those interested. Sections 1.10.32 and 1.10.33 from "de
                        Finibus Bonorum et Malorum" by Cicero are also reproduced in their
                        exact original form, accompanied by English versions from the 1914
                        translation by H. Rackham.
                    </Typography>
                </Box>)}
        </React.Fragment>
    )
}

export default TabsContainer