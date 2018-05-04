Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
//------------------------------------------------------------------------------
  $stateProvider
  //landing page
    .state('home',{
      url: '/home',
      templateUrl: 'views/home.html'
    })
  //login of user
    .state('login', {
      url: '/login',
      templateUrl: 'views/auth/login.html'
      // controller: 'insert controller'
    })
  //registration of user
    .state('register', {
      url: '/register',
      templateUrl: 'views/auth/register.html'
    })
  //showing all users
    .state('usersIndex',{
      url: '/users',
      templateUrl: 'views/users/index.html'
    })
  //showing the clicked user?
    .state('usersShow',{
      url: '/users/:id',
      templateUrl: 'views/users/show.html'
      // controller: 'insert controller'
    })
  //mood show with playlist
    .state('moodsShow',{
      url: '/moods',
      templateUrl: 'views/moods/show.html'
      // controller: 'insert controller'
    })
    .state('moodsNew',{
      url: '/moods/new',
      templateUrl: 'views/moods/new.html'
      // controller: 'insert controller'
    });
  $urlRouterProvider.otherwise('/home');
}
export default Router;
