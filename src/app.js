import angular from 'angular';
//import 'angular-messages';
//-----------------------3rd party dependancies---------------------------------
import '@uirouter/angularjs';
import 'satellizer';
//-------------------------Style------------------------------------------------
import './scss/style.scss';
//-------------------------Modules----------------------------------------------
import Router from './config/router';
// AUTH HERE
//----------------------Controllers---------------------------------------------

//-----------------------Models--------------------------------------------------
// import User from './models/user';
//-----------------------Module-------------------------------------------------
angular.module('moodify', ['ui.router'])
  .config(Router);
