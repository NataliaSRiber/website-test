import React from 'react';
import Image from 'next/image'
import Nav from './Nav';
import Slider from 'react-slick';
// import dance1 from './assets/dance-1.jpg'
// import dance2 from './assets/dance-2.jpg'
// import dance3 from './assets/dance-3.jpg'
import b1 from './assets/7254611.jpg'
import b2 from './assets/7254711.jpg'
import na from './assets/next.png'
import pa from './assets/back.png'
import WhatsappIcon from './Whatsappicon';
import styles from '../styles/banner.module.css'


const NextBtn = (props: any) => {
  const { onClick } = props;
  return (
    <div className='text-blue-950 sm:w-32 w-20' onClick={onClick}>
      <Image src={na} alt="next-arrow"/>
    </div>
  );
};

const PrevBtn = (props: any) => {
  const { onClick } = props;
  return (
    <div className='text-blue-950 sm:w-32 w-20' onClick={onClick}>
      <Image src={pa} alt="prev-arrow" />
    </div>
  );
};

const OurPhotos = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,

    responsive: [
      {
        dots: true,
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        dots: true,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
      <>
        <Nav />
        <h1 className='text-3xl md:text-5xl text-gray-700 font-semibold text-center py-20'>See our recent photos</h1>
        <div className='z-0'>
        <Slider {...settings} className={`${styles["slick-slider"]}`}>
          <div>
            <Image
                className='w-{100} p-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} p-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} p-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} p-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} p-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} p-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} p-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b2}
                alt="Picture of the author"
              />
          </div>    
        </Slider>
        <Slider {...settings} className={`${styles["slick-slider"]} pt-20`}>
          <div>
            <Image
                className='w-{100} p-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} p-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} p-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} p-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} p-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} p-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} p-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-{100} m-3'
                src={b1}
                alt="Picture of the author"
              />
          </div>    
        </Slider>
        </div>
        <WhatsappIcon />
      </>
    );
}


export default OurPhotos;