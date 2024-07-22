import React, { useEffect, useState } from 'react'
import axios from "axios";

const BASE_URL = "https://localhost:7291/api/Staj";



function EkleSil() {
  const [url, setUrl] = useState('');
  const [baslik, setBaslik] = useState('');
  const [aciklama, setAciklama] = useState('');
  const [yayinYili, setYayinYili] = useState('');
  const [yonetmen, setYonetmen] = useState('');
  const [oyuncular, setOyuncular] = useState('');
  const [ImDb, setImDb] = useState('');
  const [Id, setId] = useState('');


  const [selectedOption, setSelectedOption] = useState('Film1');
  const handleClick = () => {
    if (selectedOption === "Film1") {
      const postDizis = async (_newDizi) => {
        const response = await axios.post(BASE_URL, _newDizi, {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        console.log(response.data)
      }
      const newDizi = {
        "url": url,
        "baslik": baslik,
        "aciklama": aciklama,
        "yayinYil": +yayinYili,
        "yonetmen": yonetmen,
        "oyuncular": oyuncular,
        "imdb": +ImDb
      }
      postDizis(newDizi);

    }

  }
  const handleClickSil = () => {
    if (selectedOption === "Film1") {
      const postDizis = async (_Id) => {
        const response = await axios.delete([BASE_URL, _Id].join("/"), {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        console.log(response.data)
      }
      postDizis(Id);

    }

  }


  return (
    <div className='eklesil-wrapper'>
      <div className='eklesil-input'>

        <h3 >Film veya Dizi Url giriniz</h3>
        <br />
        <input type="text" onChange={(e) => setUrl(e.target.value)} />
        <br />
        <br />

        <h3> Filmin veya Dizi adını giriniz</h3>
        <br />
        <input type="text" onChange={(e) => setBaslik(e.target.value)} />
        <br />
        <br />
        <h3> Filmin veya Dizi açıklamasını giriniz</h3>
        <br />
        <input type="text" onChange={(e) => setAciklama(e.target.value)} />
        <br />
        <br />
        <h3> Filmin veya Dizi yayın yılını giriniz</h3>
        <br />
        <input type="text" onChange={(e) => setYayinYili(e.target.value)} />
        <br />
        <br />
        <h3> Filmin veya Dizi Yönetmenini giriniz</h3>
        <br />
        <input type="text" onChange={(e) => setYonetmen(e.target.value)} />
        <br />
        <br />
        <h3> Filmin veya Dizi Oyuncularını giriniz</h3>
        <br />
        <input type="text" onChange={(e) => setOyuncular(e.target.value)} />
        <br />
        <br />
        <h3>Filmin veya Dizi ImDb giriniz</h3>
        <br />
        <input type="text" onChange={(e) => setImDb(e.target.value)} />
        <br />
        <br />
        <h3>Dizi</h3>
        <input type="radio"
          name="Dizi"
          value="Dizi1"
          checked={selectedOption === 'Dizi1'}
          onChange={() => setSelectedOption('Dizi1')} />
        <br />
        <br />
        <h3>Film</h3>
        <input type="radio"
          name="Film"
          value="Film1"
          checked={selectedOption === 'Film1'}
          onChange={() => setSelectedOption('Film1')} />
        <br />
        <br />
        <button onClick={handleClick}> EKLE</button>
        <br />
        <br />
        <h3>Silmek istediğiniz filmin Id sini giriniz</h3>
        <input type="text" onChange={(e) => setId(e.target.value)} />
        <br />
        <br />

        <button onClick={handleClickSil} >SİL</button>


      </div>

    </div>
  )
}

export default EkleSil