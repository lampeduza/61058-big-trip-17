import View from '../view/view.js';

const createTripListTemplate = () => '<ul class="trip-events__list"></ul>';

export default class TripListView extends View {
  getTemplate() {
    return createTripListTemplate();
  }
}
