// app/app.js

/**
  * Require all the app dependencies
  * Create the main module of the app
**/
require('angular-material')
require('angularfire')
require('firebase')
require('angular-route')

angular.module('planner', ['ngMaterial', 'firebase', 'ngRoute'])

require('./config')
require('./services')
require('./filters')
require('./controllers')
