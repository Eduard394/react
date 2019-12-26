import React from 'react';
import logo from './logo.svg';
import './Example.css';






function Example() {


  console.log('nananann')
  return (
  <div className="container">
     <h1 className="title">
        Hello world <span aria-label="emoji" role="img">🔥</span>
     </h1>
     <input type="text" className="new-task"/>
  </div>
  );
}

export default Example;
