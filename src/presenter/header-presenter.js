// import FilterMessageView from '../view/filter-message-view.js';
import FilterView from '../view/filter-view.js';
import TripInfoView from '../view/trip-info-view.js';

import {render, RenderPosition} from '../render.js';


export default class HeaderPresenter {

  init = (headerContainer) => {
    this.headerContainer = headerContainer;

    // Записали в свойства экземпляры компонентов
    this.tripInfoComponent = new TripInfoView();
    this.filterComponent = new FilterView();

    // Заголовок, дата, цена
    render(this.tripInfoComponent, this.headerContainer, RenderPosition.AFTERBEGIN);

    // Фильтры
    render(this.filterComponent, this.headerContainer.querySelector('.trip-controls__filters'));
  };
}
