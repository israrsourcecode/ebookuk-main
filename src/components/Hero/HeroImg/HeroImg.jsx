const HeroImg = ({ img_url }) => {
    return (
        <div className="hero-img animate-up">
            <img className="img-fluid" src={img_url} alt="" />
        </div>
    )
}

export default HeroImg
