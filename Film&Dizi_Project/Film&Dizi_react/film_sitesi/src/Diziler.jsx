import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'
import { Link } from 'react-router-dom'

const BASE_URL = "https://localhost:7291/api/Staj";



function Diziler() {

  const [dizi, setDizi] = useState([]);

  const getAllDizis = async () => {
    const response = await axios.get(BASE_URL + "/diziler")
    setDizi(response.data)
  }
  useEffect(() => {
    getAllDizis();
  })

  return (
    <div className='dizi-back'>
    <div className='diziler-wrapper'>
      <div className='filmler-wrapper'>
        {dizi.map(diziler => {
          return <div className='film-space' key={diziler.baslik}>
            <Link to={`/diziler/${diziler.diziId}`}>
              <p><img className='film-img' src={diziler.url} alt="" /></p>
            </Link>

            <h2>{diziler.baslik}</h2>
            <p className='film-aciklama'>{diziler.aciklama}</p>
            <p className='film-tarih'>{diziler.yayinYil}</p>
            <p className='film-tarih'>{diziler.seson}</p>
          </div>
        })}
      </div>
    </div>
    </div>
  )
}

export default Diziler