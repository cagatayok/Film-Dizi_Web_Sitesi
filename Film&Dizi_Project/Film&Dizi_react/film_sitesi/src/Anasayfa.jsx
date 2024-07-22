import Slide from './Slide'
import PopulerHead from './PopulerHead';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'
import { Link } from 'react-router-dom'

const BASE_URL = "https://localhost:7291/api/Staj";


function Anasayfa() {

  const [dizi, setDizi] = useState([]);

  const getAllDizis = async () => {
    const response = await axios.get(BASE_URL + "/diziler")
    setDizi(response.data)
  }
  useEffect(() => {
    getAllDizis();
  })

  const [film, setFilm] = useState([]);

  const getAllFilm = async () => {
    const response = await axios.get(BASE_URL)
    setFilm(response.data)
  }
  useEffect(() => {
    getAllDizis();
    getAllFilm();
  })


  return (
    <div className='anasayfa'>
      <Slide />
      <PopulerHead />
      <div className='populer-wrapper'>
        {dizi.map(diziler => {
          if (diziler.diziId === 1 || diziler.diziId === 2 || diziler.diziId === 6) {
            return <div key={diziler.baslik}>
              <Link to={`/diziler/${diziler.diziId}`}>
                <p><img className='populer-gorsel' src={diziler.url} alt="" /></p>
              </Link>
              <h2 className='populer-baslik'>{diziler.baslik}</h2>
              <p className='populer-aciklama'>{diziler.aciklama}</p>
              <p className='populer-tarih'>{diziler.yayinYil}</p>
              <p className='populer-tarih'>{diziler.seson}</p>
            </div>
          }
        })}

        {film.map(filmler => {
          if (filmler.filmId === 1 || filmler.filmId === 2 || filmler.filmId === 6) {
            return <div key={filmler.baslik}>
              <Link to={`/filmler/${filmler.filmId}`}>
                <p><img className='populer-gorsel' src={filmler.url} alt="" /></p>
              </Link>
              <h2 className='populer-baslik'>{filmler.baslik}</h2>
              <p className='populer-aciklama'>{filmler.aciklama}</p>
              <p className='populer-tarih'>{filmler.yayinYil}</p>
            </div>
          }
        })}

      </div>
    </div>
  )
}

export default Anasayfa