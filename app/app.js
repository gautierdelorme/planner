// app/app.js

/**
  * Require all the app dependencies
  * Create the main module of the app
**/

require('angular-material')
require('angularfire')
require('firebase')

angular.module('planner', ['ngMaterial', 'firebase'])

require('./services')
require('./controllers')
