RegisterCtrl.$inject = ['$auth', '$state'];
//-----------------------------------------------------------------------------
function RegisterCtrl($auth, $state) {
  this.data = {};

  function handleRegister() {
    if(this.form.$invalid)return false; // added this
    $auth.signup(this.data)
      .then(() => $state.go('login'));
  }
  function isDanger(field){ // and this
    return (this.form[field].$error.required && this.form[field].$touched || this.form.$submitted);
  }

  //----------------------------------------------------------------------------
  this.handleRegister = handleRegister;
  this.isDanger = isDanger; // here
}
//-----------------------------------------------------------------------------
export default RegisterCtrl;
