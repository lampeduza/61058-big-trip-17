import View from '../view/view.js';

const createLoadingTemplate = () => '<p class="trip-events__msg">Loading...</p>';

export default class LoadingView extends View {
  getTemplate() {
    return createLoadingTemplate();
  }
}
