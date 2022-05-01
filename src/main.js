// import {render} from './render.js';
import HeaderPresenter from './presenter/header-presenter.js';
import BodyPresenter from './presenter/body-presenter.js';

const headerPresenter = new HeaderPresenter();
const bodyPresenter = new BodyPresenter();

// for header presenter
const tripMain = document.querySelector('.trip-main');

// for main presenter
const tripEvents = document.querySelector('.trip-events');

headerPresenter.init(tripMain);
bodyPresenter.init(tripEvents);
