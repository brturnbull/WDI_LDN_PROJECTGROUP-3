LoginCtrl.$inject = ['$auth', '$state'];

function LoginCtrl($auth, $state) {

  function handleLogin() {
    $auth.login(this.data)
      .then(() => $state.go('usersIndex'));
  }

  function authenticate(provider) {
    console.log(provider);
    $auth.authenticate(provider)
      .then(() => $state.go('home'));
  }

  this.handleLogin = handleLogin;
  this.authenticate = authenticate;


}

export default LoginCtrl;
