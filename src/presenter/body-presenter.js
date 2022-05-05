// import LoadingView from '../view/loading-view.js';
// import EditPointView from '../view/edit-point-view.js';
// import NewPointWithoutOffersView from '../view/new-point-without-offers-view.js';
// import NewPointWithoutDestinationView from '../view/new-point-without-destination-view.js';
import SortListView from '../view/sort-view.js';
import TripListView from '../view/trip-list-view.js';
import TripItemView from '../view/trip-item-view.js';
import NewPointView from '../view/new-point-view.js';
import {render, RenderPosition} from '../render.js';

export default class BodyPresenter {

  init = (bodyContainer) => {
    this.bodyContainer = bodyContainer;

    // Записали в свойства экземпляры компонентов
    this.sortListComponent = new SortListView();
    this.tripListComponent = new TripListView();

    // Сортировка
    render(this.sortListComponent, this.bodyContainer);

    // Список событий
    render(this.tripListComponent, this.bodyContainer);

    // События
    for (let i = 0; i < 3; i++) {
      render(new TripItemView(), this.tripListComponent.getElement());
    }

    // Новая точка
    render(new NewPointView(), this.tripListComponent.getElement(), RenderPosition.AFTERBEGIN);
  };
}
