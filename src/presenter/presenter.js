import LoadingView from '../view/loading-view.js';
import SortListView from '../view/sort-view.js';
import FilterView from '../view/filter-view.js';
import FilterMessageView from '../view/filter-message-view.js';
import TripListView from '../view/trip-list-view.js';
import TripItemView from '../view/trip-item-view.js';
import TripInfoView from '../view/trip-info.js';
import EditPointView from '../view/edit-point-view.js';
import NewPointWithoutOffersView from '../view/new-point-without-offers-view.js';
import NewPointWithoutDestinationView from '../view/new-point-without-destination-view.js';
import NewPointView from '../view/new-point-view.js';

import {render} from '../render.js';

class HeaderPresenter {
	// Записали в свойства экземпляры компонентов
	tripInfoComponent = new TripInfoView();
	filterComponent = new FilterView();

	init = (headerContainer) => {
		this.headerContainer = headerContainer;

		// Заголовок, дата, цена
		render(this.tripInfoComponent, this.headerContainer, 'afterbegin');

		// Фильтры
		render(this.filterComponent, this.headerContainer.querySelector('.trip-controls__filters'));
	}
}

class BodyPresenter {
	// Записали в свойства экземпляры компонентов
	sortListComponent = new SortListView();
	tripListComponent = new TripListView();

	init = (bodyContainer) => {
		this.bodyContainer = bodyContainer;

		// Сортировка
		render(this.sortListComponent, this.bodyContainer);

		// Список событий
		render(this.tripListComponent, this.bodyContainer);

		// События
		for (let i = 0; i < 3; i++) {
			render(new TripItemView(), this.tripListComponent.getElement());
		}

		// Новая точка
		render(new NewPointView(), this.tripListComponent.getElement(), 'afterbegin');
	}
}

export {HeaderPresenter, BodyPresenter};
