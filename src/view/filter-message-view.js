import {createElement} from '../render.js';

const createFilterMessageTemplate = () => `<p class="trip-events__msg">Click New Event to create your first point</p>`;

export default class FilterMessageView {
	getTemplate() {
		return createFilterMessageTemplate();
	}

	getElement() {
		if (!this.element) {
			this.element = createElement(this.getTemplate());
		}

		return this.element;
	}

	removeElement() {
		this.element = null;
	}
}