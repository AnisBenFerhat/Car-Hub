'use client';

import { useEffect, useState } from 'react';
import { fetchCars } from '@/utils';
import { CarCard, ShowMore } from '.';
import { HomeProps } from '@/types';

const CarResults = ({ searchParams }: HomeProps) => {
  const [allCars, setAllCars] = useState([]);
  const [isDataEmpty, setIsDataEmpty] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cars = await fetchCars({
          manufacturer: searchParams.manufacturer || '',
          year: searchParams.year || 2022,
          fuel: searchParams.fuel || '',
          limit: searchParams.limit || 10,
          model: searchParams.model || '',
        });
        setAllCars(cars);
        setIsDataEmpty(!Array.isArray(cars) || cars.length < 1 || !cars);
      } catch (error) {
        console.error('Error fetching car data:', error);
        setIsDataEmpty(true);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {!isDataEmpty ? (
        <section>
          <div className='home__cars-wrapper'>
            {allCars.map((car) => (
              <CarCard car={car} /> // Ensure each CarCard has a unique key
            ))}
          </div>
          <ShowMore pageNumber={(searchParams.limit || 10) / 10} isNext={(searchParams.limit || 10) > allCars.length} />
        </section>
      ) : (
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          <p>No cars found or an error occurred while fetching data.</p>
        </div>
      )}
    </>
  );
};

export default CarResults;
