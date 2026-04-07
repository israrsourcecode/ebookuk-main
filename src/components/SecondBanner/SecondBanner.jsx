import './SecondBanner.css'
import Button from '../Common/Button'
import Counter from './Counter/Counter'

const SecondBanner = ({h2,h3,para}) => {
    return (
        <section className='SecondBanner'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-8 text-center text-lg-start">
                        <div className="SecondBanner_data">
                            <h3>{h3}</h3>
                            <h2>{h2}</h2>
                            <p>{para}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4 text-center text-lg-end">
                        <Button name={"red_border"} value={"Get A Quote"} />
                    </div>
                </div>
                <Counter />
            </div>
        </section>
    )
}

export default SecondBanner
