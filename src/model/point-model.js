import {generatePoint} from '../fish/generate.js';

export default class PointModel {
  points = Array.from({length: 3}, generatePoint);

  getPoints = () => this.points;
}
