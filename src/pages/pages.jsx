import React from 'react';
import Home from './home';
import {Route, Routes, useLocation} from 'react-router-dom';
import Cuisine from './cuisene';
import Searched from './searched';
import Recipe from './recipe';
import { AnimatePresence } from 'framer-motion';

function Pages() {

  const location = useLocation();

  return (

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine/>} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="recipe/:name" element={ <Recipe />} />
        </Routes>
        </AnimatePresence>

  )
}

export default Pages