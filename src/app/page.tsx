import styles from "./page.module.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Newsletter from "@/components/newsletter/Newsletter";
import ListCarousel from "@/components/carousel/ListCarousel";
import Title from "@/components/title/Title";
import ListCarouselFull from "@/components/carousel/ListCarouselFull";
import { title } from "process";

export default function Home() {

  //Data Nav
  const dataNav = [
    {
        name: 'Home',
        href: '/'   
    },  
    {
        name: `Explore`,
        href: '/#explore'
    },
    {
        name: `Travel`,
        href: '/#travel'
    },
    {
        name: `Blog`,
        href: '/#blog'
    },
    {
        name: `Pricing`,
        href: '/#pricing'
    }
  ];

  const bannerList = [
    {
      title: 'Discover the Beauty and Diversity of Switzerland',
      desc: `Explore Switzerland's stunning landscapes, vibrant cities, and rich culture. 
      From the majestic Alps to serene lakes, Switzerland offers natural beauty and endless adventures. 
      Enjoy Swiss traditions, world-renowned cuisine, and charming villages. Plan your Swiss journey today!`,
      btn:'Discover Swiss',
      linkBtn:'https://www.myswitzerland.com/fr-fr/',
      srcImage:'/images/banner/suisse.jpg',
      width: 1920,
      height: 1280,
      altImage:'Tourism in Swiss'
    },
    {
      title: 'Explore the Wonders of Norway',
      desc: `Experience Norway's stunning fjords, majestic mountains, and vibrant cities. 
      From the Northern Lights to picturesque coastal towns, Norway offers breathtaking natural 
      beauty and rich cultural heritage. Enjoy outdoor adventures, explore Viking history, and savor local cuisine. Plan your Norwegian adventure today!`,
      btn:'Explore Now',
      linkBtn:'https://www.visitnorway.fr/',
      srcImage:'/images/banner/norvege.jpg',
      width: 1920,
      height: 1280,
      altImage:'Tourism in Norvegian'
    }
  ]

  const imageCarousel = [
    {
      href: 'https://www.myswitzerland.com/fr-fr/',
      srcImage:'/images/destination/Destination-berlin.jpg',
      width: 497,
      height: 661,
      altImage:'Tourism in Berlin',
      title: 'Moment of Berlin',
      desc: 'Berlin, Germany',
    },
    {
      href: 'https://www.visitnorway.fr/',
      srcImage:'/images/destination/Destination-london.jpg',
      width: 497,
      height: 661,
      altImage:'Tourism in London',
      title: 'Millennium Bridge',
      desc: 'London, United Kingdom',
    },
    {
      href: 'https://www.visitnorway.fr/',
      srcImage:'/images/destination/Destination-venice.jpg',
      width: 497,
      height: 661,
      altImage:'Tourism in Italy',
      title: 'Rialto Bridge',
      desc: 'Venice, Italy',
    },
    {
      href: 'https://www.visitnorway.fr/',
      srcImage:'/images/destination/Destination-lisbonne.jpg',
      width: 497,
      height: 661,
      altImage:'Tourism in Portugal',
      title: 'Sea of Orange Tiles ',
      desc: 'Lisbon, Portugal',
    }
  ]

  return (
    <div className="page">
      <Header linkMenu={dataNav}/>
      <main className={styles.main}>
        <ListCarousel list={bannerList}/>
        <div className="container">
          {/* Section Popular destinations*/}
          <div className="section popular-destination">
            <Title title="Popular Destinations" content="Most popular destinations around the world, from historical places to natural wonders."/>
          </div>
          <ListCarouselFull list={imageCarousel}/>
        </div>
      </main>
      <Newsletter title="Our newsletter"/>
      <Footer/>
    </div>
  );
}
