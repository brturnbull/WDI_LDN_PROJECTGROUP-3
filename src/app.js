import angular from 'angular';
//import 'angular-messages';
//-----------------------3rd party dependencies---------------------------------
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
import UsersIndexCtrl from './controllers/users/index';
import UsersShowCtrl from './controllers/users/show';
import UsersEditCtrl from './controllers/users/edit';
import LoginCtrl from './controllers/auth/login';
import MoodsNewCtrl from './controllers/moods/new';
import MainCtrl from './controllers/main';
import SpotifyCtrl from './controllers/moods/show';
//-----------------------Models--------------------------------------------------
import User from './models/user';
//-----------------------Module-------------------------------------------------
angular.module('moodify', ['ui.router', 'satellizer'])
  .config(Router)
  .config(Auth)
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl)
  .controller('MainCtrl', MainCtrl)
  .controller('SpotifyCtrl', SpotifyCtrl)
  .controller('MoodsNewCtrl', MoodsNewCtrl)
  .service('User', User)
  .controller('LoginCtrl', LoginCtrl)
  .controller('RegisterCtrl', RegisterCtrl);
