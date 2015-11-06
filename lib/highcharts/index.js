/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'highcharts',

  // treeForVendor: function() {
  //   return this.treeGenerator(path.join(__dirname, 'bower_components'));
  // },
  // treeFor: function(name){
  //   if (name === 'styles') {
  //     return this.treeGenerator(
  //       path.join(__dirname, '../../bower_components/bootstrap-sass/assets/stylesheets')
  //     );
  //   }
  //
  included: function(app) {
    this._super.included.apply(this, arguments);

    var options = app.options.emberHighCharts || {includeHighCharts: true};

    if (options.includeHighCharts || options.includeHighCharts3D) {
      app.import('bower_components/highcharts/highcharts.src.js');
    }

    if (options.includeHighStock) {
      app.import('bower_components/highcharts/highstock.src.js');
    }

    if (options.includeHighMaps) {
      app.import('bower_components/highcharts/highmaps.src.js');
    }

    if (options.includeHighChartsMore) {
      app.import('bower_components/highcharts/highcharts-more.src.js');
    }

    if (options.includeHighCharts3D) {
      app.import('bower_components/highcharts/highcharts-3d.src.js');
    }

    if (options.includeModules) {
      var modules = options.includeModules;
      for (var i = 0; i < modules.length; i++) {
        app.import('bower_components/highcharts/modules/' + modules[i] + '.src.js');
      }
    }
  }
};
