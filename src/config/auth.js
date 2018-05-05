Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.loginUrl = '/api/login';
  $authProvider.registerUrl = '/api/register';
  
  $authProvider.spotify({
    clientId: '8cf42704f94d4160a0006881e4855ce8',
    url: '/api/spotify'
  });
}

export default Auth;
