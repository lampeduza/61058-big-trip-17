import {render} from './render.js';
import {HeaderPresenter, BodyPresenter} from './presenter/presenter.js';

const headerPresenter = new HeaderPresenter();
const bodyPresenter = new BodyPresenter();

// for header presenter
const tripMain = document.querySelector('.trip-main');

// for main presenter
const tripEvents = document.querySelector('.trip-events');

headerPresenter.init(tripMain);
bodyPresenter.init(tripEvents);