import './App.css';
import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; //phải install: npm install react-router-dom
import Navbar from './Component/navbar/Navbar';
import Banner from './Component/banner/Banner';
import Search from './Component/search/Search';
import Adventure from './Component/adventures/Adventure';
import Footer from './Component/footer/Footer';
import Contact from './Component/contact/Contact';
import Explore from './Component/explore/Explore';
import Gallery from './Component/gallery/Gallery';

import '../node_modules/materialize-css/dist/js/materialize';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/materialize-css/dist/css/materialize.css';


function App() {
  return (
    <Router>
      <Fragment>       
        {/* <Navbar /> */}
        <Banner />
        {/* <Search />
        <Explore />
        <Adventure />
        <Gallery />
        <Contact />
        <Footer /> */}
      </Fragment>
    </Router>
  );
}

export default App;
