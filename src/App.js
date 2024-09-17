import React from 'react';
import './App.css';
import Header from './components/common/header/Header';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Homepages from './components/home/Homepages';
import Footer from './components/common/footer/Footer';
import Culture from './components/culture/Culture';
import SinglePages from './components/singlePages/SinglePages';

function App() {
  return (
      <>
        <Router>
        <Header />
        <Routes>
            <Route exact path='/' element={<Homepages />} />
            <Route exact path='/singlepage/:id' element={<SinglePages />} />
            <Route exact path='/culture' element={<Culture />} />
        </Routes>
        <Footer />
        </Router>
      </>
  );
}

export default App;
