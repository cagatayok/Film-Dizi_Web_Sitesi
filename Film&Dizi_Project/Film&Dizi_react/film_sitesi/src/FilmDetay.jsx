import { useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Filmler from './Filmler';
import './index.css'

const BASE_URL = "https://localhost:7291/api";


const FilmDetay = () => {
  const { id } = useParams();

  const [films, setFilms] = useState([]);

  const GetFilmById = async () => {
    const response = await axios.get([BASE_URL, "Staj", id].join("/"));
    setFilms(response.data);
  };


  useEffect(() => {
    GetFilmById();
    window.scrollTo(0, 0);

  }, []);

  console.log(films)


  return (
    <div className="detay">
      <div className="deneme">
        <li>
          <a href="https://www.youtube.com/watch?v=TyskcLbCkqE" target="_blank">
            <img className="detay-img" src={films.url} alt="" />
          </a>
        </li>
        <h2 className="detay-baslik">{films?.baslik}</h2>
        <div className="detay-aciklama">
          <p className="detay-paragraf">{films?.aciklama}</p>
          <br />
          <p>{films.yonetmen}</p>
          <br />
          <p> {films.oyuncular} </p>
          <p className="detay-tarih">{films.yayinYil}</p>
          <p className="detay-imdb">IMDB {films.imdb} </p>

        </div>

      </div>

    </div>
  )
}

export default FilmDetay