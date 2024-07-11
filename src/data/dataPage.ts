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

  //Data Banner
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

  //Data Carousel Destination
  const imageCarousel = [
    {
      href: 'https://www.visitberlin.de/fr',
      srcImage:'/images/destination/Destination-berlin.jpg',
      width: 497,
      height: 661,
      altImage:'Tourism in Berlin',
      title: 'Moment of Berlin',
      desc: 'Berlin, Germany',
    },
    {
      href: 'https://www.visitlondon.com/',
      srcImage:'/images/destination/Destination-london.jpg',
      width: 497,
      height: 661,
      altImage:'Tourism in London',
      title: 'Millennium Bridge',
      desc: 'London, United Kingdom',
    },
    {
      href: 'https://www.veneziaunica.it/en/content/visit-venice-0',
      srcImage:'/images/destination/Destination-venice.jpg',
      width: 497,
      height: 661,
      altImage:'Tourism in Italy',
      title: 'Rialto Bridge',
      desc: 'Venice, Italy',
    },
    {
      href: 'https://www.visitlisboa.com/',
      srcImage:'/images/destination/Destination-lisbonne.jpg',
      width: 497,
      height: 661,
      altImage:'Tourism in Portugal',
      title: 'Sea of Orange Tiles ',
      desc: 'Lisbon, Portugal',
    }
  ]

  //data Blog
    const dataBlog = {
        title: 'Beautiful Italy Let’s travel',
        desc: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and 
        I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, 
        the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, 
        but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.`,
        txtButton:'Read More',
        href:'https://www.bookbeat.com/it/book/italy-travel-guide-1211956?refreshmarket=true&gad_source=1&gclid=CjwKCAjw4ri0BhAvEiwA8oo6F-OtvWy0UQCnps9WZntyZF_xzWsXyokN4I69MrPyFVdiRA0RKze08BoCq9AQAvD_BwE',
        srcImage:'/images/blog-Image.jpg',
        wImage: 762,
        hImage: 873,
        altImage:'Italy travel'
    }

    //Data Carousel Destination
  const dataGallery = [
    {
      href: 'https://www.visitberlin.de/fr',
      srcImage:'/images/destination/Destination-berlin.jpg',
      width: 497,
      height: 661,
      altImage:'Tourism in Berlin',
    },
    {
      href: 'https://www.visitlondon.com/',
      srcImage:'/images/destination/Destination-london.jpg',
      width: 497,
      height: 661,
      altImage:'Tourism in London',
    },
    {
      href: 'https://www.veneziaunica.it/en/content/visit-venice-0',
      srcImage:'/images/destination/Destination-venice.jpg',
      width: 497,
      height: 661,
      altImage:'Tourism in Italy',
    },
    {
      href: 'https://www.visitlisboa.com/',
      srcImage:'/images/destination/Destination-lisbonne.jpg',
      width: 497,
      height: 661,
      altImage:'Tourism in Portugal',
    }
  ]


export { dataNav, bannerList, imageCarousel, dataBlog, dataGallery }
    