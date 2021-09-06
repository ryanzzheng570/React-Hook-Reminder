import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@material-ui/core'

//Info
const About = () => {
    return (
        <Box>
            <h4>This website is to demonstrate and practice the understanding of React-Hook, React-Router-Dom</h4>
            <Link to="/">Go back</Link>
        </Box>
    )
}

export default About
