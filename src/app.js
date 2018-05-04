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
<<<<<<< HEAD
import UsersIndexCtrl from './controllers/users/index';
import UsersShowCtrl from './controllers/users/show';
=======
import LoginCtrl from './controllers/auth/login';
>>>>>>> development
//-----------------------Models--------------------------------------------------
import User from './models/user';
//-----------------------Module-------------------------------------------------
angular.module('moodify', ['ui.router', 'satellizer'])
  .config(Router)
  .config(Auth)
  .controller('RegisterCtrl', RegisterCtrl)
<<<<<<< HEAD
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .service('User', User);
=======
  .controller('LoginCtrl', LoginCtrl);
>>>>>>> development
