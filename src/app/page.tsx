import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/header/Header";

export default function Home() {

  //Data Nav
  const dataNav = [
    {
        name: 'Home',
        href: '/'   
    },  
    {
        name: `Explore`,
        href: '/expenses'
    },
    {
        name: `Travel`,
        href: '/compte'
    },
    {
        name: `Blog`,
        href: '/category'
    },
    {
        name: `Pricing`,
        href: '/category'
    }
  ];

  return (
    <>
      <Header linkMenu={dataNav}/>
      <main className={styles.main}>
      </main>
    </>
  );
}
