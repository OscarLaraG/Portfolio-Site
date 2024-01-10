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
          <h3>The Football Bot</h3>
          <p className="portfolio_item_description">
    <strong>A discordBot for Football Fanatics</strong>
    <br />
    <strong>The FootballBot:</strong> This Project will be based around Web-Scraping LIVE data from official Football league sites such as: The Premier League, La Liga, etc. The bot will be able to return highest scorers, top assisters, top dribblers, etc.
  </p>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG2} alt = ""/>
          </div>
          <h3>Restaurant Finder</h3>
          <p className="portfolio_item_description">
    <strong>Restaurant Recommendation System I will be providing the file with my part of the code only, visit the other parts for the other group members contributions under Resources/Links</strong>
    <br />
    The goal of our project is to explore the Yelp dataset and perform sentiment analysis, trigram modeling, and recommendation algorithms. By creating two supervised learning classifiers, utilizing logistic regression, and naive bayes, we predict the sentiment of new reviews.
  </p>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG3} alt = ""/>
          </div>
          <h3>Crime in The Bronx</h3>
          <p className="portfolio_item_description">
    <strong>Crime Rates in The Bronx </strong>
    <br />
    this project delves into the intricate landscape of crime in The Bronx. Leveraging NYC Open Data, the focus is on deciphering crime rates and identifying the safest and most vulnerable neighborhoods. Employing advanced data visualization techniques, including bar graphs and time series graphs, the analysis aims to provide a nuanced understanding of crime dynamics in The Bronx.
  </p>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio