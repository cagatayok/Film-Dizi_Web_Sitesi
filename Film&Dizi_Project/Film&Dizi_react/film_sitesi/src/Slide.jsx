import React from 'react'
import img1 from './img/aqua.jpg'
import img2 from './img/wednesday.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import './styles.css';


function Slide() {

    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="swiper-slide-centered">
                <SwiperSlide > <img className='slider-resim' src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='slider-resim' src={img2} alt="" /></SwiperSlide>

            </Swiper>


        </div>
    )




}

export default Slide