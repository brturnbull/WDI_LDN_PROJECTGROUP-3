RegisterCtrl.$inject = ['$auth', '$state','$rootScope'];
//-----------------------------------------------------------------------------
function RegisterCtrl($auth, $state,$rootScope) {
  this.data = {};

  function handleRegister() {
    if(this.form.$invalid)return false;
    $auth.signup(this.data)
      .then(() => {
        $rootScope.$broadcast('flashMessage', {
          content: 'You are all signed up, please login'
        });
        $state.go('login');
      });
  }
  function isDanger(field){
    return (this.form[field].$error.required && this.form[field].$touched || this.form.$submitted);
  }

  //----------------------------------------------------------------------------
  this.handleRegister = handleRegister;
  this.isDanger = isDanger;
}
//-----------------------------------------------------------------------------
export default RegisterCtrl;
