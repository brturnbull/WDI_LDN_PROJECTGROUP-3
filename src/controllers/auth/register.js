RegisterCtrl.$inject = ['$auth', '$state'];
//-----------------------------------------------------------------------------
function RegisterCtrl($auth, $state) {
  this.data = {};

  function handleRegister() {
    console.log(this.data);
    $auth.signup(this.data)
      .then(() => $state.go('login'));
  }
  //----------------------------------------------------------------------------
  this.handleRegister = handleRegister;
}
//-----------------------------------------------------------------------------
export default RegisterCtrl;
