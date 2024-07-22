import React from 'react'
import logo from './img/okflix.png'
import { FaBeer, FaHome, FaUser } from "react-icons/fa";
import App from './App';
import { Link } from "react-router-dom"



function Header() {
    return (
        <div>
            <div className='header-wrapper'>
                <img className='img-wrapper' src={logo} alt="" />
                <div className='nav'>
                    <Link className='header-link' to="/">Anasayfa</Link>
                    <Link className='header-link' to="/filmler">Filmler</Link>
                    <Link className='header-link' to="/diziler">Diziler</Link>
                    {/* <Link className='header-link' to="/listem">Listem</Link> */}

                </div>
                <Link className='profil-link' to="/profil"> Profil <FaUser /> </Link>
            </div>
            <div>

            </div>

        </div>

    )
}

export default Header