const geolib = require('geolib');
const _ = require('lodash');

const area = require(__dirname + '/../area.json');

class PoPoPoint {
  isInside(latlng) {
    return _.findKey(area, inside => geolib.isPointInside(latlng, inside)) || false;
  }
}

module.exports = PoPoPoint;
