import styles from "./page.module.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Newsletter from "@/components/newsletter/Newsletter";
import ListCarousel from "@/components/carousel/ListCarousel";
import Title from "@/components/title/Title";
import ListCarouselFull from "@/components/carousel/ListCarouselFull";
import { title } from "process";
import Blog from "@/components/blog/Blog";
import { dataNav, bannerList, imageCarousel, dataBlog, dataGallery } from "@/data/dataPage";
import Gallery from "@/components/carousel/Gallery";

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
          
          {/* Section Blog*/}
          <div className="section blog">
            <Title title="Our Blog" content="An insight the incredible experience in the world"/>
            <Blog {...dataBlog}/>
          </div>

          {/* Section Gallery*/}
          <div className="section gallery">
            <Title title="Destination Gallery" content="Our photo gallery on trip"/>
            <Gallery list={dataGallery}/>
          </div>

          {/* Section Travel*/}
          <div className="section travel">
            <Title title="Traveler’s Experiences" content="Here some awesome feedback from our travelers"/>
            <Gallery list={dataGallery}/>
          </div>

        </div>
      </main>
      <Newsletter title="Our newsletter"/>
      <Footer/>
    </div>
  );
}
