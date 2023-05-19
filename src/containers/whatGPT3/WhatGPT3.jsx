import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3 is a natural language processing tool driven by AI technology that allows you to have human-like conversations and much more with the chatbot. The language model can answer questions and assist you with tasks like composing emails, essays, and code." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="GPT-3 chatbot itself is fairly simple, as all you have to do is type in your text and receive the information. If you don’t get the intended result, try tweaking your prompt or giving GPT-3 further instruction." />
      <Feature title="Knowledgebase" text="As an AI language model, GPT-3 has access to a wide range of knowledge spanning different topics." />
      
    </div>
  </div>
);

export default WhatGPT3;