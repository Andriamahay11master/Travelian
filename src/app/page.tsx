import styles from "./page.module.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Newsletter from "@/components/newsletter/Newsletter";
import ListCarousel from "@/components/carousel/ListCarousel";
import Title from "@/components/title/Title";
import ListCarouselFull from "@/components/carousel/ListCarouselFull";
import { title } from "process";
import Blog from "@/components/blog/Blog";
import { dataNav, bannerList, imageCarousel, dataBlog, dataGallery, dataTestimonial, dataOffer, dataTrip } from "@/data/dataPage";
import Gallery from "@/components/carousel/Gallery";
import Testimonial from "@/components/testimonial/Testimonial";
import ListTestimonial from "@/components/testimonial/ListTestimonial";
import ListOffer from "@/components/offer/ListOffer";
import Link from "next/link";
import ListTrip from "@/components/carousel/ListTrip";
import ScrollTop from "@/components/scrollTop/ScrollTop";

export default function Home() {

  

  return (
    <div className="page">
      <Header linkMenu={dataNav}/>
      <main className={styles.main}>
        <h1 className="title-h1">Welcome to Travelian</h1>
        <ListCarousel list={bannerList}/>
        <div className="container">
          {/* Section Popular destinations*/}
          <div className="section popular-destination">
            <Title title="Popular Destinations" content="Most popular destinations around the world, from historical places to natural wonders."/>
            <ListCarouselFull list={imageCarousel}/>
          </div>
          
          {/* Section Offer*/}
          <div className="section offer">
            <Title title="Special Offer" content="Most popular destinations around the world, from historical places to natural wonders."/>
            <ListOffer list={dataOffer}/>
          </div>

          {/* Section Blog*/}
          <div className="section blog">
            <Title title="Our Blog" content="An insight the incredible experience in the world"/>
            <Blog {...dataBlog}/>
          </div>

          {/* Section Trip planner*/}
          <div className="section trip">
              <div className="section-wrapper"> 
                <div className="section-col">
                  <Title title="Trip Planners" content="20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start travelling, start throwing off the bowlines."/>
                  <Link href="/explore" className="btn btn-primary" title='link to all trip plans'>View all trip plans</Link>
                </div>
                <div className="section-col">
                  <ListTrip list={dataTrip}/>
                </div>
              </div>
          </div>

          {/* Section Gallery*/}
          <div className="section gallery">
            <Title title="Destination Gallery" content="Our photo gallery on trip"/>
            <Gallery list={dataGallery}/>
          </div>

          {/* Section Travel*/}
          <div className="section travel">
            <Title title="Traveler’s Experiences" content="Here some awesome feedback from our travelers"/>
            <ListTestimonial list={dataTestimonial}/>
          </div>



        </div>
      </main>
      <Newsletter title="Our newsletter"/>
      <Footer/>
      <ScrollTop/>
    </div>
  );
}
