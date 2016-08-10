'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var geolib = require('geolib');
var _ = require('lodash');

var area = require(__dirname + '/../area.json');

var PoPoPoint = function () {
  function PoPoPoint() {
    _classCallCheck(this, PoPoPoint);
  }

  _createClass(PoPoPoint, [{
    key: 'isInside',
    value: function isInside(latlng) {
      return _.findKey(area, function (inside) {
        return geolib.isPointInside(latlng, inside);
      }) || false;
    }
  }]);

  return PoPoPoint;
}();

module.exports = PoPoPoint;
