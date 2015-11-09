import Ember from 'ember';
// import { setDefaultHighChartOptions } from '../utils/highcharts-option-loader';
// https://github.com/ahmadsoe/ember-highcharts/blob/d91dfff258522618c55faa8f3174f1030a0ec978/addon/components/high-charts.js
const {
  Component,
  computed,
  get,
  set,
  merge,
  on,
  run,
  $
} = Ember;

export default Component.extend({
  containerId: null,
  title: null,
  buildChart: function() {
    var id = '#' + this.get('containerId'),
       title = this.get('title')
      Ember.$(id).highcharts({
          title: {
              text: title,
              x: -20 //center
          },
          xAxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          yAxis: {
              title: {
                  text: 'Temperature (°C)'
              },
              plotLines: [{
                  value: 0,
                  width: 1,
                  color: '#808080'
              }]
          },
          tooltip: {
              valueSuffix: '°C'
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0
          },
          series: [{
              name: 'Tokyo',
              data: [[0, 7.0], [0, 10.0], 6.9, 9.5, 14.5, [3, 15.0], 18.2, 21.5, 25.2, 26.5, 23.3, [8, 10.0], 18.3, 13.9, 9.6]
          }, {
              name: 'Berlin',
              data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
          }]
      });
  }.on('didInsertElement')
  
  // classNames: ['highcharts-wrapper'],
  // content: undefined,
  // mode: undefined,
  // chartOptions: undefined,
  // chart: null,
  // theme: undefined,
  // callback: undefined,
  //
  // buildOptions: computed('chartOptions', 'content.[]', function() {
  //   let chartOptions = $.extend(true, {}, get(this, 'theme'), get(this, 'chartOptions'));
  //   let chartContent = get(this, 'content.length') ? get(this, 'content') : [{
  //     id: 'noData',
  //     data: 0,
  //     color: '#aaaaaa'
  //   }];
  //
  //   let defaults = { series: chartContent };
  //
  //   return merge(defaults, chartOptions);
  // }),
  //
  // didReceiveAttrs() {
  //   this._super(...arguments);
  //
  //   if (!(get(this, 'content') && get(this, 'chart'))) {
  //     return;
  //   }
  //
  //   let chart = get(this, 'chart');
  //   let noData = chart.get('noData');
  //
  //   if (noData != null) {
  //     noData.remove();
  //   }
  //
  //   return get(this, 'content').forEach((series, idx) => {
  //     if (chart.series[idx]) {
  //       return chart.series[idx].setData(series.data);
  //     } else {
  //       return chart.addSeries(series);
  //     }
  //   });
  // },
  //
  // drawAfterRender() {
  //   run.scheduleOnce('afterRender', this, 'draw');
  // },
  //
  // draw() {
  //   let completeChartOptions = [ get(this, 'buildOptions'), get(this, 'callback') ];
  //   let mode  = get(this, 'mode');
  //
  //   if (typeof mode === 'string' && !!mode) {
  //     completeChartOptions.unshift(mode);
  //   }
  //
  //   let $element = this.$();
  //   if ($element) {
  //     let chart = $element.highcharts.apply($element, completeChartOptions).highcharts();
  //     set(this, 'chart', chart);
  //   }
  // },
  //
  // _renderChart: on('didInsertElement', function() {
  //   this.drawAfterRender();
  //   setDefaultHighChartOptions(this.container);
  // }),
  //
  // _destroyChart: on('willDestroyElement', function() {
  //   if (get(this, 'chart')) {
  //     get(this, 'chart').destroy();
  //   }
  // })
});
