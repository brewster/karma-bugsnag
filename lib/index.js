var BUGSNAG_CDN_URL = 'http://d2wy8f7a9ursnm.cloudfront.net/bugsnag-2.js';

var initBugsnag = function(files, apiKey) {
  files.unshift({ pattern: BUGSNAG_CDN_URL + '" data-apikey="' + apiKey,
                  included: true, watched: false });
};

initBugsnag.$inject = ['config.files', 'config.bugsnagApiKey'];

module.exports = {
  'framework:bugsnag': ['factory', initBugsnag]
};
