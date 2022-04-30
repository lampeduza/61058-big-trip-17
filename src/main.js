// import LoadingView from './view/loading-view.js';
import SortListView from './view/sort-view.js';
import FilterView from './view/filter-view.js';
import FilterMessageView from './view/filter-message-view.js';
import TripListView from './view/trip-list-view.js';
import TripItemView from './view/trip-item-view.js';
import TripInfoView from './view/trip-info.js';
import EditPointView from './view/edit-point-view.js';
import NewPointWithoutOffersView from './view/new-point-without-offers-view.js';
import NewPointWithoutDestinationView from './view/new-point-without-destination-view.js';
import NewPointView from './view/new-point-view.js';

import {createElement} from './render.js';

import {render} from './render.js';
// import Presenter from './presenter/presenter.js';
// const presenter = new Presenter();
// presenter.init(tripEvents);


// для header presenter
const tripMain = document.querySelector('.trip-main');

// Заголовок, дата, цена
render(new TripInfoView(), tripMain, 'afterbegin');
// Фильтры
render(new FilterView(), tripMain.querySelector('.trip-controls__filters'));


// для main presenter
const tripEvents = document.querySelector('.trip-events');

// Сортировка
render(new SortListView(), tripEvents);
render(new TripListView(), tripEvents);

for (let i = 0; i < 3; i++) {
	render(new TripItemView(), tripEvents.querySelector('.trip-events__list'));
}

// Новая точка
render(new NewPointView(), tripEvents.querySelector('.trip-events__list'), 'afterbegin');