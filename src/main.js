import HeaderPresenter from './presenter/header-presenter.js';
import BodyPresenter from './presenter/body-presenter.js';
import PointModel from './model/point-model.js';

// for header presenter
const tripMain = document.querySelector('.trip-main');

// for main presenter
const tripEvents = document.querySelector('.trip-events');

const headerPresenter = new HeaderPresenter();
const bodyPresenter = new BodyPresenter();

const pointModel = new PointModel();

headerPresenter.init(tripMain);
bodyPresenter.init(tripEvents, pointModel);

