const geolib = require('geolib');
const _ = require('lodash');

const area = require(__dirname + '/../area.json');
const yolk = require(__dirname + '/../yolk.json');

class PoPoPoint {
  isInside(latlng) {
    const isYolk = _.findKey(yolk, inside => geolib.isPointInside(latlng, inside));
    if (isYolk) return `${isYolk},1`;

    const isArea = _.findKey(area, inside => geolib.isPointInside(latlng, inside));
    if (isArea) return `${isArea},0`;

    return false;
  }
}

module.exports = PoPoPoint;
