MainCtrl.$inject = ['$transitions', '$auth','$rootScope', '$state','$timeout'];
//-----------------------------------------------------------------------------
function MainCtrl($transitions, $auth,$rootScope, $state,$timeout) {
  this.navBarIsOpen = false;
  this.isHome = true;
  this.flashMessage = null;

  this.isAuthenticated = $auth.isAuthenticated;

  $transitions.onSuccess({}, (transition) => {
    this.isHome = (transition.to().name === 'home');
    this.navBarIsOpen = false;
  });
  //-----------------------------------------------------------------------------
  function toggleNav() {
    this.navBarIsOpen = !this.navBarIsOpen;
  }

  function logout() {
    $auth.logout();
    $state.go('home');
  }
  //-----------------------------------------------------------------------------
  this.toggleNav = toggleNav;
  this.logout = logout;

  $rootScope.$on('flashMessage', (e, data) => {
    this.flashMessage = data;
    $timeout(() => this.flashMessage = null, 5000);
  });
//-----------------------------------------------------------------------------
}
//-----------------------------------------------------------------------------
export default MainCtrl;
