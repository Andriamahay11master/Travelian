import styles from "./page.module.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Newsletter from "@/components/newsletter/Newsletter";
import ListCarousel from "@/components/carousel/ListCarousel";

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
      title: 'Start your unforgettable journey with us.',
      desc: 'The best travel for your jouney begins now',
      btn:'Discover',
      linkBtn:'#',
      srcImage:'/images/banner/tourism.jpg',
      width: 1920,
      height: 1280,
      altImage:''
    },
    {
      title: 'Start your unforgettable journey with us.',
      desc: 'The best travel for your jouney begins now',
      btn:'Discover',
      linkBtn:'#',
      srcImage:'/images/banner/tourism.jpg',
      width: 1920,
      height: 1280,
      altImage:'Tourism 1'
    }
  ]

  return (
    <div className="page">
      <Header linkMenu={dataNav}/>
      <main className={styles.main}>
        <ListCarousel list={bannerList}/>
      </main>
      <Newsletter title="Our newsletter"/>
      <Footer/>
    </div>
  );
}
