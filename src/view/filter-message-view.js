import View from '../view/view.js';

const createFilterMessageTemplate = () => '<p class="trip-events__msg">Click New Event to create your first point</p>';

export default class FilterMessageView extends View {
  getTemplate() {
    return createFilterMessageTemplate();
  }
}
