import React from 'react';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import './App.css';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <>
       <Nav />
      <div className="app__container">
        <div className="app__left">
          <Posts />
        </div>
        <div className="app__right">
          <Form />
        </div>
      </div>
    </>
  );
};

export default App;
