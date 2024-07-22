import React, { useState, useEffect } from 'react'
import './index.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import FilmDetay from './FilmDetay'

const BASE_URL = "https://localhost:7291/api/";

function SearchMovie() {

    const [typing, setTyping] = useState('')
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        getAllFilms();
        console.log(movieData);

    }, [typing])


    const getAllFilms = async () => {
        const response = await axios.get(BASE_URL + "Staj");
        const getData = response.data.filter(item => item.baslik.toLowerCase().includes(typing.toLowerCase())).map(i => {
            return {
                filmId: i.filmId,
                url: i.url,
                baslik: i.baslik,
                aciklama: i.aciklama,
                yayinYil: i.yayinYil
            }
        })
        setMovieData(getData);
    }

    function typingStart(e) {
        setTyping(e.target.value);

    }

    return (
        <div>
            <div className='search-movie'>
                <div className='main-search'>
                    <h3> Arama Çubuğu</h3>
                    <input onChange={typingStart} type="text " placeholder='ara' />
                </div>

                <div>
                    {<div className='filmler-wrapper' >
                        {movieData.map(item => {
                            return <div className='film-space' key={item.baslik}>
                                <Link to={`/filmler/${item.filmId}`}>
                                    <p><img className='film-img' src={item.url} alt="" /></p>
                                </Link>
                                <h2>{item.baslik}</h2>
                                <p className='film-aciklama'>{item.aciklama}</p>
                                <p className='film-tarih'>{item.yayinYil}</p>
                            </div>

                        })}
                    </div>}
                </div>






            </div >

        </div>
    )
}

export default SearchMovie