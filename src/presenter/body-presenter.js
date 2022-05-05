// import LoadingView from '../view/loading-view.js';
import EditPointView from '../view/edit-point-view.js';
// import NewPointWithoutOffersView from '../view/new-point-without-offers-view.js';
// import NewPointWithoutDestinationView from '../view/new-point-without-destination-view.js';
import SortListView from '../view/sort-view.js';
import TripListView from '../view/trip-list-view.js';
import TripItemView from '../view/trip-item-view.js';
import NewPointView from '../view/new-point-view.js';
import {render, RenderPosition} from '../render.js';

export default class BodyPresenter {

  init = (bodyContainer, pointModel) => {
    this.bodyContainer = bodyContainer;
    this.pointModel = pointModel;
    this.points = this.pointModel.getPoints();

    // Записали в свойства экземпляры компонентов
    this.sortListComponent = new SortListView();
    this.tripListComponent = new TripListView();

    // Сортировка
    render(this.sortListComponent, this.bodyContainer);

    // Список событий
    render(this.tripListComponent, this.bodyContainer);

    // События
    for (let i = 0; i < this.points.length; i++) {
      render(new TripItemView(this.points[i]), this.tripListComponent.getElement());
    }

    // Новая точка
    render(new NewPointView(), this.tripListComponent.getElement(), RenderPosition.AFTERBEGIN);

    // Редактировать точку
    render(new EditPointView(this.points[0]), this.tripListComponent.getElement(), RenderPosition.AFTERBEGIN);
  };
}
