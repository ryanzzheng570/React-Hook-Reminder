import React from 'react'
import { Link } from 'react-router-dom'

//Page Footer
const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy;</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
