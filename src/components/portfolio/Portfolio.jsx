import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



const data = [
  {
    id:1,
    image: IMG1,
    title: 'Flutter Projects'  ,
    github: 'https://github.com/AbdullahSalihOner/Flutter_Projects',
    demo: 'https://www.binance.com/tr/markets/overview'
  },
  {
    id:2,
    image: IMG2,
    title: 'Lorem ipsum dolor sit amet2.'  ,
    github: 'https://github.com/',
    demo: 'https://www.binance.com/tr/markets/overview'
  },
  {
    id:3,
    image: IMG3,
    title: 'Lorem ipsum dolor sit amet2.'  ,
    github: 'https://github.com/',
    demo: 'https://www.binance.com/tr/markets/overview'
  },
  {
    id:4,
    image: IMG4,
    title: 'Lorem ipsum dolor sit amet2.'  ,
    github: 'https://github.com/',
    demo: 'https://www.binance.com/tr/markets/overview'
  },
  {
    id:5,
    image: IMG5,
    title: 'Lorem ipsum dolor sit amet2.'  ,
    github: 'https://github.com/',
    demo: 'https://www.binance.com/tr/markets/overview'
  },
  {
    id:6,
    image: IMG6,
    title: 'Lorem ipsum dolor sit amet2.'  ,
    github: 'https://github.com/',
    demo: 'https://www.binance.com/tr/markets/overview'
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                   <img src={image} alt={title} />
                </div>

                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>

            )
          })
        }


       {/*  <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>

          <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
              <a href="http://github.com" className="btn" target="_blank">Github</a>
              <a href="http://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>

          <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
              <a href="http://github.com" className="btn" target="_blank">Github</a>
              <a href="http://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
        </article>


        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>

          <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
              <a href="http://github.com" className="btn" target="_blank">Github</a>
              <a href="http://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
        </article>



        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>

          <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
              <a href="http://github.com" className="btn" target="_blank">Github</a>
              <a href="http://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
        </article>


        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>

          <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
              <a href="http://github.com" className="btn" target="_blank">Github</a>
              <a href="http://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>

          <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
              <a href="http://github.com" className="btn" target="_blank">Github</a>
              <a href="http://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
        </article>
 */}
      </div>
    </section>
  )
}

export default Portfolio