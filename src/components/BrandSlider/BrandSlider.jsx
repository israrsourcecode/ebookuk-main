// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './BrandSlider.css'


// Image Import
// import img1 from '../src/assets/images/parthner1.webp'
import img1 from '../../assets/images/parthner1.webp'
import img2 from '../../assets/images/parthner2.webp'
import img3 from '../../assets/images/parthner3.webp'
import img4 from '../../assets/images/parthner4.webp'
import img5 from '../../assets/images/parthner5.webp'
import img6 from '../../assets/images/parthner6.webp'
import img7 from '../../assets/images/parthner7.webp'

const BrandSlider = () => {
    const mySwiper1 = [img1, img2, img3, img4, img5, img6, img7]
    return (
        <>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={5}
                spaceBetween={30}
                loop={true}

                autoplay={{
                    delay: 0,              // no delay (continuous)
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}

                speed={4000}             // higher = smoother slow movement

                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                    },
                }}
                className="mySwiper1"
            >
                {mySwiper1.map((url, idx) => (
                    <SwiperSlide><img key={idx} className='img-fluid' src={url} alt="" /></SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default BrandSlider
