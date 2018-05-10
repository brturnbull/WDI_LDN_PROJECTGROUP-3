LoginCtrl.$inject = ['$auth', '$state'];
//-----------------------------------------------------------------------------
function LoginCtrl($auth, $state,) {

  function handleLogin() {
    if(this.form.$invalid)return false;
    $auth.login(this.data);
    // .then(() => {
    //   $rootScope.$broadcast('flashMessage', {
    //     content: 'You have logged in successfully'
    //   });
    $state.go('moodsNew');
  }
  function authenticate(provider) {

    $auth.authenticate(provider);
    // .then(() => {
    //   $rootScope.$broadcast('flashMessage', {
    //     content: 'You have logged in successfully'
    //   });
    $state.go('moodsNew');
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
