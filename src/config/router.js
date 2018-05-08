secureState.$inject = ['$q', '$auth', '$state', '$rootScope'];
function secureState($q, $state, $auth, $rootScope) {
  return new $q(resolve  => {
    if($auth.isAuthenticated)
      return resolve();
    $rootScope.$broadcast('flashMessage', {
      type: 'danger',
      content: 'You must be logged in.'
    });
    $state.go('');
  });
}
Router.$inject = ['$stateProvider', '$urlRouterProvider'];
//------------------------------------------------------------------------------
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
  //landing page
    .state('home',{
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'LoginCtrl as login'
    })
  //login of user
    .state('login', {
      url: '/login',
      templateUrl: 'views/auth/login.html',
      controller: 'LoginCtrl as login'
    })
  //registration of user
    .state('register', {
      url: '/register',
      templateUrl: 'views/auth/register.html',
      controller: 'RegisterCtrl as register'
    })
  //showing all users
    .state('usersIndex',{
      url: '/users',
      templateUrl: 'views/users/index.html',
      controller: 'UsersIndexCtrl as UsersIndex'
    })
  //showing the clicked user
    .state('usersShow',{
      url: '/users/:id',
      templateUrl: 'views/users/show.html',
      controller: 'UsersShowCtrl as UsersShow'
    })
  //editing user
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: 'views/users/edit.html',
      controller: 'UsersEditCtrl as UsersEdit'
      //state.go isnt a function solve on monday
      // resolve: { secureState }
    })
  //mood show with playlist
    .state('moodsShow',{
      url: '/moods/show',
      templateUrl: 'views/moods/show.html'
      // controller: 'insert'
    })
    .state('moodsNew',{
      url: '/moods/new',
      templateUrl: 'views/moods/new.html',
      controller: 'MoodsNewCtrl as moodsNew'
    });
  $urlRouterProvider.otherwise('/');
}
export default Router;
