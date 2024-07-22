import React from 'react'
import { Link } from "react-router-dom"
import { FaBeer, FaHome, FaUser, FaHeart } from "react-icons/fa";

function Vertical() {
    return (
        <div>
            <div className='vertical'>
                <Link className='header-link' to="/"><FaHome /></Link>
                <Link className='header-link' to="/profil"> <FaUser /> </Link>
                {/* <Link className='header-link' to="/listem"><FaHeart/></Link> */}
                

            </div>
        </div>
    )
}

export default Vertical