import React, { useEffect, useState } from 'react'
import FilmDetay from './FilmDetay'
import axios from "axios";
import { Link } from 'react-router-dom'
import './index.css'
import SearchMovie from './SearchMovie';
const BASE_URL = "https://localhost:7291/api/";

function Filmler() {
  const [film, setFilm] = useState([]);

  const getAllFilms = async () => {
    const response = await axios.get(BASE_URL + "Staj");
    setFilm(response.data)
  }
  useEffect(() => {
    getAllFilms();
  }, [])


  return (
    <div className='filt-wrapper'>
      <SearchMovie />
      {/* <div className='filmler-wrapper' >
        {film.map(filmler => {
          return <div className='film-space' key={filmler.baslik}>
            <Link to={`/filmler/${filmler.filmId}`}>
              <p><img className='film-img' src={filmler.url} alt="" /></p>
            </Link>
            <h2>{filmler.baslik}</h2>
            <p className='film-aciklama'>{filmler.aciklama}</p>
            <p className='film-tarih'>{filmler.yayinYil}</p>
          </div>

        })}
      </div> */}

    </div>
  )
}

export default Filmler