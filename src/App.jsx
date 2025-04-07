import React from 'react';

import {Main} from "./layouts/Main";
import Header from './layouts/Header';
import Footer from './layouts/Footer';


export default function App() {
  return (
      <div className="p-5">
        <Header/>
        <Main/>
        <Footer/>
      </div>
  );
}