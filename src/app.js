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
// AUTH HERE
//----------------------Controllers---------------------------------------------
import RegisterCtrl from './controllers/auth/register';
import LoginCtrl from './controllers/auth/login';
//-----------------------Models--------------------------------------------------
// import User from './models/user';
//-----------------------Module-------------------------------------------------
angular.module('moodify', ['ui.router', 'satellizer'])
  .config(Router)
  .config(Auth)
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('LoginCtrl', LoginCtrl);
