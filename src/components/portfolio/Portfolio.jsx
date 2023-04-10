import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/discordbot.jpg';
import IMG2 from '../../assets/datasci_2018x878.png';
import IMG3 from '../../assets/Restaurant_2018x878.png'

const Portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5>My projects</h5>
      <h2>Portfolio</h2>

      <div className= "container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt = ""/>
          </div>
          <h3>placeholder</h3>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG2} alt = ""/>
          </div>
          <h3>placeholder</h3>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG3} alt = ""/>
          </div>
          <h3>placeholder</h3>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio