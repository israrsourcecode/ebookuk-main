// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay, Navigation } from 'swiper/modules';

import "./ReviewSlider.css"

const ReviewSlider = ({ data }) => {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: '.next',
                    prevEl: '.preview',
                }}
                modules={[EffectCards, Autoplay, Navigation]}
                className="reviewSlider"
            >
                {data.map((data, idx) => {
                    return <SwiperSlide key={idx} >
                        <div className="review-slide">
                            <div className="review-slide-top">
                                <div className="review-slide-top-left">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                    <i className="ri-star-line"></i>
                                </div>
                                <div className="review-slide-top-right">
                                    <i className="ri-double-quotes-l"></i>
                                </div>
                            </div>
                            <div className="review-slide-center">
                                <p>{data.para}</p>
                            </div>
                            <div className="review-slide-bottom">
                                <div className="review-slide-bottom-left">
                                    <img src={data.img} alt="" />
                                </div>
                                <div className="review-slide-bottom-right">
                                    <h4>{data.author}</h4>
                                    <p>{data.service}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
                {/* <!-- Navigation Buttons --> */}
                <div className="next">
                    <i className="ri-arrow-right-s-line"></i>
                </div>
                <div className="preview">
                    <i className="ri-arrow-left-s-line"></i>
                </div>
            </Swiper>
        </>
    )
}

export default ReviewSlider
