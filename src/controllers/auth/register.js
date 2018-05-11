RegisterCtrl.$inject = ['$auth', '$state','$rootScope'];
//-----------------------------------------------------------------------------
function RegisterCtrl($auth, $state,$rootScope) {
  this.data = {};

  function handleRegister() {
    if(this.form.$invalid)return false;
    $auth.signup(this.data)
      .then(() => {
        $rootScope.$broadcast('flashMessage', {
          type: 'success',
          content: 'You are all signed up, please login'
        });
        $state.go('login');
      })
      .catch(
        $rootScope.$broadcast('flashMessage', {
          // type: 'danger',
          content: 'Sorry - We have this email or username registered'
        })
      );
  }

  //Authenticates the users via spotify
  function authenticate(provider) {

    $auth.authenticate(provider)
      .then(() => {
        $rootScope.$broadcast('flashMessage', {
          // insert message desired here
        });
        $state.go('moodsNew');
      });
  }

  function isDanger(field){
    return (this.form[field].$error.required && this.form[field].$touched || this.form.$submitted);
  }

  //----------------------------------------------------------------------------
  this.handleRegister = handleRegister;
  this.isDanger = isDanger;
  this.authenticate = authenticate;
}
//-----------------------------------------------------------------------------
export default RegisterCtrl;
