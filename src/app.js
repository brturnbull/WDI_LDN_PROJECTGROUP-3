import angular from 'angular';
//import 'angular-messages';
//-----------------------3rd party dependancies---------------------------------
import '@uirouter/angularjs';
import 'satellizer';
//-------------------------Style------------------------------------------------
import './scss/style.scss';
//-------------------------Modules----------------------------------------------
import Router from './config/router';
import Auth from './config/auth';
//----------------------Controllers---------------------------------------------
import LoginCtrl from './controllers/auth/login';
//-----------------------Models--------------------------------------------------
// import User from './models/user';
//-----------------------Module-------------------------------------------------
angular.module('spofy', ['ui.router', 'satellizer'])
  .config(Router)
  .config(Auth)
  .controller('LoginCtrl', LoginCtrl);
