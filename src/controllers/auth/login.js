LoginCtrl.$inject = ['$auth', '$state'];

function LoginCtrl($auth, $state) {

  function handleLogin() {
    console.log('clicked');
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
