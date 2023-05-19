import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>It is difficult to predict the future of GPT-3. It depends on various factors, such as the popularity and demand for the platform, its ability to adapt to changing technologies and user needs, and its ability to attract and retain users. However, as long as people continue to seek a platform to have meaningful conversations and exchange ideas, the future of GPT-3 could be promising.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;