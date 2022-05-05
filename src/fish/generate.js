import {getRandomInteger} from '../utils.js';
import {destination} from '../fish/destination.js';
import {offer} from '../fish/offer.js';

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

const generateOffers = (array) => {
	const randomIndex = getRandomInteger(0, array.length - 1);
	return array[randomIndex];
}

// Generate offers' titles

export const generatePoint = () => ({
		'type': generateType(),
		'destination': generateDestination(destination),
		'date from': '2019-07-10T22:55:56.845Z',
		'date to': '2019-07-11T11:22:13.375Z',
		'base_price': getRandomInteger(1, 900),
		'offers': generateOffers(offer),
		'is favorite': false,
	});