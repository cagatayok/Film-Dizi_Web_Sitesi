import { useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './index.css'

const BASE_URL = "https://localhost:7291/api/Staj";


function DiziDetay() {


    const { id } = useParams();

    const [dizi, setDizi] = useState([]);

    const GetDiziById = async () => {
        const response = await axios.get([BASE_URL, "diziler", id].join("/"));
        setDizi(response.data);
    };


    useEffect(() => {
        GetDiziById();
        window.scrollTo(0, 0);

    }, []);

    

    return (
        <div className="detay">
            <div className="deneme">
                <img className="detay-img" src={dizi.url} alt="" />
                <h2 className="detay-baslik">{dizi?.baslik}</h2>
                <div className="detay-aciklama">
                    <p className="detay-paragraf">{dizi?.aciklama}</p>
                    <br />
                    <p>{dizi.yonetmen}</p>
                    <br />
                    <p> {dizi.oyuncular} </p>
                    <p className="detay-tarih">{dizi.yayinYil}</p>
                    <p className="detay-imdb">IMDB {dizi.imdb} </p>

                </div>

            </div>

        </div>
    )
}

export default DiziDetay