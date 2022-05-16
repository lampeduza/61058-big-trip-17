import {getRandomInteger} from '../utils.js';
import {destinations} from '../fish/destination.js';
import {offers} from '../fish/offer.js';
import {generateDateFrom, generateDateTo} from '../utils.js';

// Тип
const generateType = () => {
  const types = [
    'Taxi',
    'Bus',
    'Train',
    'Ship',
    'Drive',
    'Flight',
    'Check-in',
    'Sightseeing',
    'Restaurant'
  ];

  const randomIndex = getRandomInteger(0, types.length - 1);
  return types[randomIndex];
};

const generateDestination = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);
  return array[randomIndex];
};


const generateOffer = (array, type) => {
  const arrayElement = array.find((element) => element.type === type);

  return arrayElement.offers;
};

// Generate offers' titles
export const generatePoint = () => {
  const type = generateType();
  const dateFrom = generateDateFrom();
  const dateTo = generateDateTo(dateFrom);

  return {
    type,
    'destination': generateDestination(destinations),
    'dateFrom': dateFrom,
    'dateTo': dateTo,
    'basePrice': getRandomInteger(1, 900),
    'offers': generateOffer(offers, type),
    'isFavorite': false,
  };
};
