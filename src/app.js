import angular from 'angular';
import './lib/filepicker';
import 'angular-filepicker/dist/angular_filepicker';
import 'angular-messages';
//-----------------------3rd party dependencies---------------------------------
import '@uirouter/angularjs';
import 'satellizer';
//-------------------------Style------------------------------------------------
import './scss/style.scss';
//-------------------------Config----------------------------------------------
import Router from './config/router';
import Auth from './config/auth';
import Upload from './config/upload';
//----------------------Controllers---------------------------------------------
import RegisterCtrl from './controllers/auth/register';
import UsersIndexCtrl from './controllers/users/index';
import UsersShowCtrl from './controllers/users/show';
import UsersEditCtrl from './controllers/users/edit';
import LoginCtrl from './controllers/auth/login';
import MoodsNewCtrl from './controllers/moods/new';
import MainCtrl from './controllers/main';
//-----------------------Models-------------------------------------------------
import User from './models/user';
//-----------------------Directives---------------------------------------------
import uploadImage from './directives/uploadImage';
//-----------------------Module-------------------------------------------------

angular.module('moodify', ['ui.router','angular-filepicker', 'satellizer', 'ngMessages'])
  .config(Router)
  .config(Auth)
  .config(Upload)
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl)
  .controller('MainCtrl', MainCtrl)
  .controller('MoodsNewCtrl', MoodsNewCtrl)
  .controller('LoginCtrl', LoginCtrl)
  .controller('RegisterCtrl', RegisterCtrl)
  .directive('uploadImage', uploadImage)
  .service('User', User);
