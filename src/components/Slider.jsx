import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import i1 from '../assets/1.jpg';
import i2 from '../assets/2.webp';
import i33 from '../assets/33.webp';
const Slider = () => {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide ><img className='w-full h-[450px] rounded-3xl p-3 ' src={i1} alt="" /></SwiperSlide>
                <SwiperSlide ><img className='w-full h-[450px] rounded-3xl p-3  object-cover' src={i2} alt="" /></SwiperSlide>
                <SwiperSlide ><img className='w-full h-[450px] rounded-3xl p-3 ' src={i33} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;