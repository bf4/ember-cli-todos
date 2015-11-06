/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'frontend',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    // alter the content security policy for dev
    // http://waltermcginnis.com/en/site/topics/show/96-using-pow-with-ember-cli-and-content-security-policy
    // 20559
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self' *.dev:35730 *.dev:49152 *.xip.io:49152 'unsafe-inline'",
      'font-src': "'self' http://*.dev/",
      'connect-src': "'self' ws://*.dev:35730/ ws://*.dev:49152/ ws://*.xip.io:49152/",
      'img-src': "'self' data:",
      'style-src': "'self' 'unsafe-inline'",
      'media-src': "'self'"
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
