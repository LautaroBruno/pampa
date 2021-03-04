import logo from './logo.svg';
import './App.css';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import Head from './components/Head';
import texts from './texts';
import React from 'react';
function App() {
  const [actualText, setActualText] = React.useState(texts.en)
  const changeLanguage= lang => {
    console.log(lang)
  }
  console.log(actualText)
  return (
    <div className="App">
      <Header lan={changeLanguage} text={actualText.header}/>
      <Head text={actualText.head}/>
    </div>
  );
}

export default App;
