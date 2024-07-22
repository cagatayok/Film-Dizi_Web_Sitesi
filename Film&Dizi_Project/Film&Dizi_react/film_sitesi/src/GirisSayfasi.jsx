import React, { useEffect, useState } from 'react'
import './index.css'
import Listem from './Listem'
import { Routes, Route, Link, NavLink } from 'react-router-dom';

function GirisSayfasi() {

    const [action, setAction] = useState("Giriş Yap")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const handleLogin = (event) => {
        event.preventDefault();

        if (email === 'cag' && password === '123') {
            setMessage('Hoşgeldiniz!'); // Kimlik bilgileri eşleşirse mesajı ayarla
        } else {
            alert('Hatalı e-posta veya şifre.'); // Aksi takdirde hata mesajını ayarla
        }
    };

    useEffect(() => {
        if (message === 'Hoşgeldiniz!') {
            setTimeout(() => {
                window.location.href = "/eklesil";
            }, 500);
        }
    }, [message]);

    return (

        <div className='giris-wrapper'>
            <div className='giris-header'>
                <div className="giris-text">{action}</div>
                <br />
            </div>
            <div className='giris-inputs'>
                {action === "Giriş Yap" ? <div></div> : <div className="giris-input">
                    <img src="" alt="" />
                    <input type="text" placeholder='İsim' />
                </div>}

                <br />
                <div className="giris-input">
                    <img src="" alt="" />
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <br />
                <div className="giris-input">
                    <img src="" alt="" />
                    <input type="password" placeholder='Şifre' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            {action === "Kayıt Ol" ? <div></div> : <div className="sifremi-unuttum">Şifremi Unuttum <span>Tıklayınız</span></div>}
            {message && <div className="message">{message}</div>}
            <div className="submit-wrapper">
                <div className={action === "Giriş Yap" ? "submit gray" : "submit"} onClick={handleLogin} >Kayıt Ol </div>
                <div className={action === "Kayıt Ol" ? "submit gray" : "submit"} onClick={handleLogin}>Giriş Yap </div>
            </div>
        </div>

    )
}

export default GirisSayfasi