export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  try {
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    // Handle error appropriately (log, display error message, etc.)
    console.error('Error fetching car data:', error);
    return null; // Return null or an appropriate error object
  }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
