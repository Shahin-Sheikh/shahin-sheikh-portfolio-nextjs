import React from 'react';
import { bigProjectSection } from '../../utils/portfolio';

import BigProjectCard from './BigProjectCard';
import BigProjectCardReversed from './BigProjectCard-reversed';

const BigProjects: React.FC = () => {
  const { title } = bigProjectSection;
  //-------------------------------------------------------------
  const FirstImage = {
    src: '/assets/images/ProjectPictures/big-images/rsz_1shoplover.jpg',
    alt: 'Image-Description',
    width: 500,
    height: 300,
  };
  const FirstImageSmall =
    '/assets/images/ProjectPictures/small-images/shoplover.png';

  //-------------------------------------------------------------
  const SecondImage = {
    src: '/assets/images/ProjectPictures/big-images/rsz_foodi.jpg',
    alt: 'Image-Description',
    width: 800,
    height: 600,
  };
  const SecondImageSmall =
    '/assets/images/ProjectPictures/small-images/foodi.jpg';

  //-------------------------------------------------------------
  const ThirdImage = {
    src: '/assets/images/ProjectPictures/big-images/rsz_firsttrip.jpg',
    alt: 'Image-Description',
    width: 800,
    height: 600,
  };
  const ThirdImageSmall =
    '/assets/images/ProjectPictures/small-images/firsttrip.jpg';

  //-------------------------------------------------------------
  const FourthImage = {
    src: '/assets/images/ProjectPictures/big-images/rsz_2teletalkbig.png',
    alt: 'Image-Description',
    width: 800,
    height: 600,
  };
  const FourthImageSmall =
    '/assets/images/ProjectPictures/small-images/teletalk.jpg';

  //-------------------------------------------------------------

  return (
    <div
      id="work"
      className="max-w-containerSmall mx-auto min-h-fit py-10  lgl:py-32 flex flex-col gap-3"
    >
      <h2 className="heading-secondary pt-50 font-titleFont text-2xl font-semibold flex items-center">
        {title}
        <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[0.5px] bg-gray-700 ml-7"></span>
      </h2>
      <div>
        <BigProjectCard
          image={FirstImage}
          imageUrl={FirstImageSmall}
          title="Shoplover"
          description="ShopLover is a cutting-edge e-commerce platform revolutionizing online shopping experiences. Built with the latest technologies including Next.js, Go, PostgreSQL, and Node.js, ShopLover utilizes a microservices architecture for unparalleled scalability, flexibility, and performance."
          gitLink="#"
          liveLink="https://shoplover.com/"
          youtubeLink="#"
          techStackList={[
            'Next.js',
            'TypeScript',
            'Go',
            'Node.js',
            'PostgreSQL',
          ]}
        />

        <BigProjectCardReversed
          image={SecondImage}
          imageUrl={SecondImageSmall}
          title="Foodi-BD"
          description="Bangladesh’s leading food delivery app with over 5000+ restaurants along with amazing deals and services. Foodi's user-friendly platform empowers customers to effortlessly browse menus, place orders with a few simple taps, and track the status of their delivery in real-time."
          gitLink="#"
          liveLink="https://foodibd.com/"
          youtubeLink="#"
          techStackList={[
            'Next.js',
            'TypeScript',
            'Go',
            'Node.js',
            'PostgreSQL',
          ]}
        />

        <BigProjectCard
          image={ThirdImage}
          imageUrl={ThirdImageSmall}
          title="FirstTrip"
          description="FirstTrip is an innovative OTA (Online Travel Agency) project designed to revolutionize the way travelers plan, book, and experience their first journeys. Through intuitive interfaces, personalized recommendations, and expert guidance, FirstTrip empowers users to navigate every aspect of travel planning with confidence and ease."
          gitLink="#"
          liveLink="https://partner.firsttrip.com/"
          youtubeLink="#"
          techStackList={['React.js', 'JavaScript', 'Node.js', '.Net', 'MySQL']}
        />

        <BigProjectCardReversed
          image={FourthImage}
          imageUrl={FourthImageSmall}
          title="Corporate Sim Registration Automation"
          description="The Teletalk Project Corporate SIM Registration Automation is a groundbreaking initiative aimed at streamlining and enhancing the process of registering corporate SIM cards within the telecommunications network."
          gitLink="#"
          liveLink="https://www.teletalk.com.bd/bn/"
          youtubeLink="#"
          techStackList={['React.js', 'Node.js', 'JavaScript', 'MongoDB']}
        />
      </div>
    </div>
  );
};

export default BigProjects;
