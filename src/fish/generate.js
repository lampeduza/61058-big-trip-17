import {getRandomInteger} from '../utils.js';
import {destination} from '../fish/destination.js';
import {offer} from '../fish/offer.js';
import {formatDate, generateDateFrom, generateDateTo} from '../utils.js';

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
	const arrayElement = array.find((element) => {
		return element.type === type;
	});

	return arrayElement.offers;
};

// Generate offers' titles
export const generatePoint = () => {
	const type = generateType();
	const dateFrom = generateDateFrom();
	const dateTo = generateDateTo(dateFrom);

	return ({
		'type': type,
		'destination': generateDestination(destination),
		'date_from': dateFrom,
		'date_to': dateTo,
		'base_price': getRandomInteger(1, 900),
		'offers': generateOffer(offer, type),
		'is favorite': false,
	});
};