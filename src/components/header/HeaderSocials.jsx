import React from 'react'
import './header.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/abdullahsalihoner/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/AbdullahSalihOner" target="_blank"><FaGithub/></a>
        
    </div>
  )
}

export default HeaderSocials