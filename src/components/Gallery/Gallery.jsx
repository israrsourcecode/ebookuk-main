import { useState } from 'react'
import './Gallery.css'
import ImgCard from '../Common/ImgCard';
import HeadingCenter from '../Common/HeadingCenter';

const Gallery = () => {
    const booksData = {
        fiction: [
            { id: 1, img: "./src/assets/images/tab2.webp" },
            { id: 2, img: "./src/assets/images/tab1.webp" },
            { id: 3, img: "./src/assets/images/tab3.webp" },
            { id: 4, img: "./src/assets/images/tab4.webp" },
            { id: 5, img: "./src/assets/images/tab5.webp" },
            { id: 6, img: "./src/assets/images/tab6.webp" },
        ],
        nonfiction: [
            { id: 1, img: "./src/assets/images/tab4.webp" },
            { id: 2, img: "./src/assets/images/tab5.webp" },
            { id: 3, img: "./src/assets/images/tab2.webp" },
            { id: 4, img: "./src/assets/images/tab3.webp" },
            { id: 5, img: "./src/assets/images/tab6.webp" },
            { id: 6, img: "./src/assets/images/tab1.webp" }
        ],
        biography: [
            { id: 1, img: "./src/assets/images/tab3.webp" },
            { id: 2, img: "./src/assets/images/tab6.webp" },
            { id: 3, img: "./src/assets/images/tab1.webp" },
            { id: 4, img: "./src/assets/images/tab2.webp" },
            { id: 5, img: "./src/assets/images/tab4.webp" },
            { id: 6, img: "./src/assets/images/tab5.webp" }
        ],
        childrenbooks: [
            { id: 1, img: "./src/assets/images/tab2.webp" },
            { id: 2, img: "./src/assets/images/tab3.webp" },
            { id: 3, img: "./src/assets/images/tab1.webp" },
            { id: 4, img: "./src/assets/images/tab4.webp" },
            { id: 5, img: "./src/assets/images/tab5.webp" },
            { id: 6, img: "./src/assets/images/tab6.webp" }
        ],
        autobiography: [
            { id: 1, img: "./src/assets/images/tab4.webp" },
            { id: 2, img: "./src/assets/images/tab1.webp" },
            { id: 3, img: "./src/assets/images/tab3.webp" },
            { id: 4, img: "./src/assets/images/tab5.webp" },
            { id: 5, img: "./src/assets/images/tab6.webp" },
            { id: 6, img: "./src/assets/images/tab2.webp" }
        ],
        businessbooks: [
            { id: 1, img: "./src/assets/images/tab6.webp" },
            { id: 2, img: "./src/assets/images/tab2.webp" },
            { id: 3, img: "./src/assets/images/tab4.webp" },
            { id: 4, img: "./src/assets/images/tab1.webp" },
            { id: 5, img: "./src/assets/images/tab3.webp" },
            { id: 6, img: "./src/assets/images/tab5.webp" }
        ]
    };
    const [activeTab, setActiveTab] = useState("fiction")
    const handleTabe = (tab) => {
        setActiveTab(tab)
    }
    return (
        <section className='GalleryTab'>
            <div className="container">
                <HeadingCenter heading={"Books That Started as Ideas and Became Real Stories"} name={"center"} />
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="GalleryTabs">
                            <button onClick={() => handleTabe("fiction")} className={activeTab === "fiction" ? "active" : ""}>Fiction (26)</button>
                            <button onClick={() => handleTabe("nonfiction")} className={activeTab === "nonfiction" ? "active" : ""}>Non Fiction (8)</button>
                            <button onClick={() => handleTabe("biography")} className={activeTab === "biography" ? "active" : ""}>Biography (19)</button>
                            <button onClick={() => handleTabe("childrenbooks")} className={activeTab === "childrenbooks" ? "active" : ""}>Children Books (11)</button>
                            <button onClick={() => handleTabe("autobiography")} className={activeTab === "autobiography" ? "active" : ""} >Autobiography (09)</button>
                            <button onClick={() => handleTabe("businessbooks")} className={activeTab === "businessbooks" ? "active" : ""}>Business Books (08)</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-8">
                        <div className="gallery">
                            {booksData[activeTab].map((book) => (
                                <ImgCard key={book.id} img={book.img} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Gallery
