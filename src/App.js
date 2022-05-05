
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <>

      <Router>
      <Header />
        <Routes>
          <Route exact path='/' element={<h1>This is the Top of the Body</h1>}/>

          <Route path='/about' element={<About />}/>


        </Routes>

      </Router>
    </>
  );
}

export default App;
