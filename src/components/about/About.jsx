import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
           <div className="about_me-image">
            <img src={ME} alt="About Image" />
           </div>
        </div>


        <div className="about_content">

          <div className="about_cards">


          <article className="about_card">
              <FaAward className="about_icon"/>
              <h5> Experience </h5>
              <small>3+ Years Individual Studying</small>
            </article>


            <article className="about_card">
              <FiUsers className="about_icon"/>
              <h5> Clients </h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon"/>
              <h5> Projects </h5>
              <small>40+ Completed Projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vitae corporis quae a quibusdam iste
             in alias reprehenderit culpa voluptate veritatis totam aliquid eligendi voluptates voluptatum, 
             ratione hic nesciunt minima!</p>


          <a href="#contact" className='btn btn-primary'> Let's Talk </a>   

        </div>
      </div>
    </section>
  )
}

export default about