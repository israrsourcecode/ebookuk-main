import { useState } from "react"
import Seo from '../components/Common/Seo'
import HeroTitle from "../components/Hero/HeroTitle/HeroTitle"
import HeroImg from "../components/Hero/HeroImg/HeroImg"
import HeroBottom from "../components/Hero/HeroBottom/HeroBottom"
import BrandSlider from "../components/BrandSlider/BrandSlider"
import SecondBanner from "../components/SecondBanner/SecondBanner"
import HoverCard from "../components/HoverCard/HoverCard"
import HeadingCenter from "../components/Common/HeadingCenter"
import VerticalHover from "../components/VerticalHover/VerticalHover"
import ReviewSlider from "../components/ReviewSlider/ReviewSlider"
import Button from "../components/Common/Button"
import ServicesSection from "../components/ServicesSection/ServicesSection"
import FaqSection from "../components/FaqSection/FaqSection"

const EbookPublishing = () => {
  const hoverDataArray = [{
    heading: "Skilled Book Professionals",
    para: "Our team includes experienced writers, editors, and publishing specialists who understand how strong books are built. They study the flow of your manuscript and help refine it without replacing your voice"
  },
  {
    heading: "Your Story Stays Yours",
    para: "Every writer carries a unique tone and perspective. We respect that voice. Suggestions focus on strengthening your message rather than reshaping it into something unfamiliar."
  },
  {
    heading: "Clear Guidance at Every Step",
    para: "Many authors feel uncertain during the publishing process. We keep communication open so you always know where your book stands and what comes next."
  },
  {
    heading: "Complete Publishing Knowledge",
    para: "Writing a book represents only part of the work. Formatting, digital distribution, and technical preparation require specific knowledge. Our publishing team handles these details with precision."
  },
  {
    heading: "Covers That Catch Attention",
    para: "Readers often judge a book by its cover. Our designers craft visuals that reflect the story inside while drawing attention on digital shelves."
  },
  {
    heading: "Post- Publishing Support",
    para: "The journey does not end once the book appears online. Many authors return with new ideas or additional projects. We stay available as a long-term creative partner."
  }]
  const verticalHover = [{
    id: "1",
    heading: "Understanding Your Vision",
    para: "Every project begins with a conversation. We explore your idea, your purpose, and the readers you hope to reach. This discussion shapes the direction of the manuscript."
  }, {
    id: "2",
    heading: "Structuring the Manuscript",
    para: "Strong books follow a clear structure. Our team organizes your chapters so the narrative flows smoothly from beginning to end."
  }, {
    id: "3",
    heading: "Collaborative Writing Support",
    para: "Some authors need help expanding their ideas into full chapters. Our writers assist in strengthening the manuscript while keeping your voice intact."
  }, {
    id: "4",
    heading: "Professional Editing",
    para: "Our editors sharpen every page and make sentences clearer. Chapters gain better rhythm. The entire manuscript reads smoothly."
  }, {
    id: "5",
    heading: "Design and Formatting",
    para: "A book must look as good as it reads. Our designers prepare professional covers and format your manuscript for digital devices."
  }, {
    id: "6",
    heading: "Publishing Your Ebook",
    para: "The final stage prepares your manuscript for online bookstores. Your draft becomes a polished ebook ready for readers around the world."
  },]
  const [activeIndex, setActiveIndex] = useState(0);
  const reviewSliderData = [
    {
      para: "“I had notes scattered everywhere. Their team helped shape them into a structured book. Watching it appear online felt incredible.”",
      author: "Amanda R.",
      service: "Book Author",
      img: "../src/assets/images/review1.webp"
    }, {
      para: "“The editing improved my manuscript without removing my personal style. That balance impressed me.”",
      author: "Daniel M.",
      service: "Book Author",
      img: "../src/assets/images/review1.webp"
    }, {
      para: "“The cover design caught my attention immediately. It reflected the theme of my book perfectly.”",
      author: "Lucas T.",
      service: "Book Author",
      img: "../src/assets/images/review1.webp"
    }, {
      para: "“I had notes scattered everywhere. Their team helped shape them into a structured book. Watching it appear online felt incredible.”",
      author: "Amanda R.",
      service: "Book Author",
      img: "../src/assets/images/review1.webp"
    }, {
      para: "“The editing improved my manuscript without removing my personal style. That balance impressed me.”",
      author: "Daniel M.",
      service: "Book Author",
      img: "../src/assets/images/review1.webp"
    }, {
      para: "“The cover design caught my attention immediately. It reflected the theme of my book perfectly.”",
      author: "Lucas T.",
      service: "Book Author",
      img: "../src/assets/images/review1.webp"
    }
  ]
  const ServiceSectionData = [{
    heading: "Book Writing",
    para: "Ideas grow into full manuscripts through structured writing support. Our team helps expand concepts into engaging chapters while protecting the original voice of the author."
  }, {
    heading: "Book Editing",
    para: "Editing improves readability and strengthens clarity across the manuscript. Each chapter becomes smoother and easier for readers to follow."
  }, {
    heading: "Book Marketing",
    para: "Publishing a book marks the beginning of its journey. Marketing helps readers discover your work in crowded digital stores."
  }, {
    heading: "Book Publishing",
    para: "We prepare your ebook for professional release across major platforms so readers can access it anywhere."
  }]
  const faqsData = [{
    id: "1",
    heading: "How long does ebook publishing take?",
    para: "The timeline depends on the manuscript length and services required. Editing projects move faster than full writing projects. Most ebooks reach completion within several weeks."
  }, {
    id: "2",
    heading: "Do I keep ownership of my book?",
    para: "Yes. The author retains full ownership and rights to the manuscript."
  }, {
    id: "3",
    heading: "Can you work with unfinished manuscripts?",
    para: "Yes. Many writers approach us with outlines or partial drafts. Our team helps develop those ideas into complete books."
  }, {
    id: "4",
    heading: "Where will my ebook be published?",
    para: "Your book can appear on major digital marketplaces where readers commonly purchase ebooks."
  }, {
    id: "5",
    heading: "Do you work with first-time authors?",
    para: "Absolutely. Many of our clients publish their first book through our platform."
  }, {
    id: "6",
    heading: "What types of books do you handle?",
    para: "We work with fiction, memoirs, educational books, business titles, self-help guides, and several other genres."
  }]
  return (
    <div>
      <Seo title="Ebook Publishing" description="Welcome to Ebook Publishing" />
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="hero-data">
                <HeroTitle heading={<>Every Great Book Begins With a <span> Voice Like Yours</span></>} headingpara={<>Avail the <span>best eBook writing services</span> at pocket-friendly rates</>} para={"Our ebook publishing platform helps authors transform their thoughts into books that readers can hold on their screens and remember long after the final page."} />
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <HeroImg img_url={"../src/assets/images/top-banner-book.webp"} />
            </div>
          </div>
        </div>
      </section>
      <HeroBottom />
      {/* <BrandReview /> */}
      <BrandSlider />

      <SecondBanner h2={"Your Story Has Waited Long Enough"} h3={"Start Your Journey Now"} para={"That manuscript sitting quietly on your computer deserves readers. Let us help you bring it to life."} />

      {/* Section 2 */}
      <section className="sec-2">
        <HeadingCenter name={"center"} heading={"The Right Partner Makes Every Book Stronger"} para={"Writing a book takes courage. Publishing it requires the right support. Our team works closely with authors so their stories reach readers in the best possible form."} />

        <div className="container">
          <div className="row g-5">
            {hoverDataArray.map((data, idx) => (
              <div className="col-12 col-md-6 col-lg-4" key={idx}>
                <HoverCard heading={data.heading} para={data.para} icon={"ri-shield-line"} />
              </div>
            ))}
          </div>
        </div>
      </section>




      <section className='VerticalHover'>
        <div className="container">
          <HeadingCenter heading={"A Clear Road From "} subHeading={"First Idea to Finished Ebook"} name={"left"} para={"Writing a book sometimes feels like walking through fog. You know the destination exists, yet the path appears unclear. Our process acts like a guide through that fog. Each stage moves your manuscript closer to a finished book that readers can enjoy."} />
          <div className="VerticalHoverContainer">
            {verticalHover.map((data, index) => (
              <VerticalHover
                key={data.id}
                heading={data.heading}
                para={data.para}
                num={data.id}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              />))}
          </div>
        </div>
      </section>

      <section className="reviewSliderSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="reviewSliderSectionData">
                <HeadingCenter heading={"Writers Share"} subHeading={"Their Experience With Us"} name={"left"} para={"Behind every review stands an author who once held an unfinished manuscript. These writers trusted us with their ideas. Today, their books sit proudly on digital shelves."} />
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="reviewSliderMain">
                <ReviewSlider data={reviewSliderData} />
              </div>
            </div>
          </div>
          <div className="buttons">
            <Button link={"/"} name={"red"} value={"Get a Quote"} />
            <Button link={"/"} name={"black"} value={"Chat With Us"} />
          </div>
        </div>
      </section>


      <ServicesSection data={ServiceSectionData} heading={"Everything an Author Needs to Bring a Book to Life"} para={"A book rarely reaches perfection in a single draft. It needs shaping, polishing, and professional preparation. Our services cover each stage so authors can focus on their message."} name={"left"} img={"../src/assets/images/sec-5.webp"} />

      <FaqSection data={faqsData} />
    </div>
  )
}

export default EbookPublishing
