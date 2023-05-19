import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Creating a culture that fosters continuous development does more than help workers build the skills they need to do their jobs. It also communicates that the organization values its employees and believes in their potential.',
  },
  {
    title: 'Become the tended active',
    text: 'Consider, sympathize,constant assistance is sufficient .',
  },
  {
    title: 'Message ',
    text: 'Lets think about possiblities while discussing, instead of debating.',
  },
  
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;