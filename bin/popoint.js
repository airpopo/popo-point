#!/usr/bin/env node

var program = require('commander');
var path = require('path');

var PoPoPoint = require('../build/index');

function getLatLng(latlng) {
  latlng = latlng.split(',');
  return { latitude: parseFloat(latlng[0]), longitude: parseFloat(latlng[1]) };
}

program
  .version('1.0.0')
  .usage('<cmd> [options] <latitude>,<longitude>');

program
  .command('inside <latitude>,<longitude>')
  .action(function (latlng) {
    const popo = new PoPoPoint();
    console.log(popo.isInside(getLatLng(latlng)) || 'NO_SERVICE');
  });

program.parse(process.argv);
