import logo from './logo.svg';
import './App.css';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import Head from './components/Head';
import texts from './texts';
import React from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Section9 from './components/Section9';
import Footer from './components/Footer';
import MapSection from './components/MapSection';
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
      <Section1 text={actualText.sect1} />
      <Section2 text={actualText.sect2} />
      <Section3 text={actualText.sect3} />
      <Section4 text={actualText.sect4} />
      <Section5 text={actualText.sect5} />
      <Section6 text={actualText.sect6} />
      <Section7 text={actualText.sect7} />
      <Section8 text={actualText.sect8} />
      <Section9 text={actualText.sect9} />
      <MapSection text={actualText.map}/>
      <Footer text={actualText.footer} />
    </div>
  );
}

export default App;
