MainCtrl.$inject = ['$transitions', '$auth','$rootScope', '$state'];
//-----------------------------------------------------------------------------
function MainCtrl($transitions, $auth,$rootScope, $state) {
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
//-----------------------------------------------------------------------------
}
//-----------------------------------------------------------------------------
export default MainCtrl;
