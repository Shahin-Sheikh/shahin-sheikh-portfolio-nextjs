import React from 'react';
import { bigProjectSection } from '../../utils/portfolio';

import BigProjectCard from './BigProjectCard';
import BigProjectCardReversed from './BigProjectCard-reversed';

const BigProjects: React.FC = () => {
  const { title } = bigProjectSection;
  //-------------------------------------------------------------
  const FirstImage = {
    src: '/assets/images/ProjectPictures/big-images/cartup_logo.png',
    alt: 'Image-Description',
    width: 500,
    height: 300,
  };
  const FirstImageSmall =
    '/assets/images/ProjectPictures/small-images/cartup_logo.png';

  //-------------------------------------------------------------
  const SecondImage = {
    src: '/assets/images/ProjectPictures/big-images/foodi_logo.jpg',
    alt: 'Image-Description',
    width: 800,
    height: 600,
  };
  const SecondImageSmall =
    '/assets/images/ProjectPictures/small-images/foodi_logo.jpg';

  //-------------------------------------------------------------
  const ThirdImage = {
    src: '/assets/images/ProjectPictures/big-images/firstrip_logo.webp',
    alt: 'Image-Description',
    width: 800,
    height: 600,
  };
  const ThirdImageSmall =
    '/assets/images/ProjectPictures/small-images/firstrip_logo.webp';

  //-------------------------------------------------------------
  const FourthImage = {
    src: '/assets/images/ProjectPictures/big-images/teletalk_logo.jpg',
    alt: 'Image-Description',
    width: 800,
    height: 600,
  };
  const FourthImageSmall =
    '/assets/images/ProjectPictures/small-images/teletalk_logo.jpg';

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
          title="CartUp"
          description="Cartup ltd. is a dynamic multi-seller e-commerce platform based in Bangladesh, offering a simple, convenient, and value-for-money online shopping experience for both customers and sellers. As a concern of the renowned U.S. Bangla Airlines, we are empowered by the strength, resources, and expertise of a leading multinational conglomerate, enabling us to build a world-class marketplace that delivers exceptional value, product diversity, and operational efficiency."
          gitLink="#"
          liveLink="https://cartup.com/"
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
          title="Foodi"
          description="Foodi is a leading food delivery app in Bangladesh, offering a seamless and convenient way for users to enjoy their favorite meals from a wide range of restaurants. With a user-friendly interface, fast delivery services, and multiple payment options, Foodi is transforming the way people experience food delivery. Whether you're craving traditional Bangladeshi cuisine, international flavors, or fast food, Foodi connects you with top restaurants in your city."
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
          title="Sim Registration Automation"
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
