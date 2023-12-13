'use client';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>Start your adventure &#8212; Find your ride, book now, and hit the road!</h1>
        <p className='hero__subtitle'>Discover seamless car rentals for your ultimate journey.</p>
        <CustomButton
          title='Explore Cars'
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src='/hero.png' alt='hero' fill className='object-contain' />
          <div className='hero__image-overlay'></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
