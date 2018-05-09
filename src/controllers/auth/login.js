LoginCtrl.$inject = ['$auth', '$state','$rootScope'];
//-----------------------------------------------------------------------------
function LoginCtrl($auth, $state,$rootScope) {

  function handleLogin() {
    if(this.form.$invalid)return false;
    $auth.login(this.data)
      .then(() => {
        $rootScope.$broadcast('flashMessage', {
          content: 'Logging successful'
        });
        $state.go('moodsNew');
      });
  }
  function authenticate(provider) {
    
    $auth.authenticate(provider)
      .then(() => $state.go('home'));
  }
  function isDanger(field){
    return (this.form[field].$error.required && this.form[field].$touched || this.form.$submitted);
  }
  //-----------------------------------------------------------------------------
  this.handleLogin = handleLogin;
  this.authenticate = authenticate;
  this.isDanger = isDanger;
}
//-----------------------------------------------------------------------------
export default LoginCtrl;
