LoginCtrl.$inject = ['$auth', '$state','$rootScope'];
//-----------------------------------------------------------------------------
function LoginCtrl($auth, $state,$rootScope) {

  function handleLogin() {
    // if(this.form.$invalid)return false;
    $auth.login(this.data)
      .then(() => {
        $rootScope.$broadcast('flashMessage', {
          // insert message desired here
        });
        $state.go('moodsNew');
      })
      .catch(
        $rootScope.$broadcast('flashMessage', {
          // type: 'danger',
          content: 'Login credentials incorrect'
        })
      );
  }
  function authenticate(provider) {

    $auth.authenticate(provider)
      .then(() => {
        $rootScope.$broadcast('flashMessage', {
          // insert message desired here
        });
        $state.go('moodsNew');
      });
  }
  //checking if field has been touched / dirty / submitted
  function isDanger(field){
    return (this.form[field].$error.required && this.form[field].$dirty|| this.form.$submitted);
  }
  //-----------------------------------------------------------------------------
  this.handleLogin = handleLogin;
  this.authenticate = authenticate;
  this.isDanger = isDanger;
}
//-----------------------------------------------------------------------------
export default LoginCtrl;
