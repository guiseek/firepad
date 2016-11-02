import uiRouter         from 'angular-ui-router'
import firebase         from 'firebase'
import angularfire      from 'angularfire'
import ngSanitize       from 'angular-sanitize'
import configFirebase   from './config.firebase.json'
import appConfig        from './config.js'
import controller       from './controller.js'
import editor             from './../editor/module.js'

angular
  .module('app', [
  , uiRouter
  ,'ngSanitize'
  ,'firebase.utils'
  ,'firebase.config'
  ,'firebase.auth'
  ,'firebase.database'
  ,'editor'
  ])
  .config(appConfig)
  .constant('ConfigFirebase', configFirebase)
  .controller('AppController', controller)
  .value('Firebase', firebase)
  .value('firebase', firebase)
