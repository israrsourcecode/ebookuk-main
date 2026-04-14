import "./Counter.css"

const Counter = () => {
    return (
        <div className='BannerCounter'>
            <div className="row">
                <div className="col-6 col-md-6 col-lg-3">
                    <div className="BannerCounterBox">
                        <i className="ri-briefcase-line"></i>
                        <span>4,452</span>
                        <p>Successful Project</p>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-3">
                    <div className="BannerCounterBox">
                        <i className="ri-emotion-happy-line"></i>
                        <span>2,241</span>
                        <p>Happy Clients</p>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-3">
                    <div className="BannerCounterBox">
                        <i className="ri-sticky-note-line"></i>
                        <span>52</span>
                        <p>Professional Writer</p>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-3">
                    <div className="BannerCounterBox">
                        <i className="ri-earth-line"></i>
                        <span>52</span>
                        <p>Global Presence</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter
