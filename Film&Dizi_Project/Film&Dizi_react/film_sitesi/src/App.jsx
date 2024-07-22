import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Anasayfa from './Anasayfa'
import Filmler from './Filmler'
import Diziler from './Diziler'
import Listem from './Listem'
import Profil from './Profil'
import Vertical from './Vertical';
import FilmDetay from './FilmDetay';
import DiziDetay from './DiziDetay';

import axios from 'axios';
import EkleSil from './EkleSil';



function App() {

  return (

    <div>
      <Header />
      <Vertical />
      <Routes>
        <Route path='/' element={<Anasayfa />} />
        <Route path='/filmler' element={<Filmler />} />
        <Route path='/filmler/:id' element={<FilmDetay />} />
        <Route path='/diziler' element={<Diziler />} />
        <Route path='/diziler/:id' element={<DiziDetay />} />
        <Route path='/listem' element={<Listem />} />
        <Route path='/eklesil' element={<EkleSil />} />
        <Route path='/profil' element={<Profil />} />
      </Routes>

    </div>



  )
}

export default App
