import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

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

  return (
    <>
      <Header linkMenu={dataNav}/>
      <main className={styles.main}>
      </main>
      <Footer/>
    </>
  );
}
