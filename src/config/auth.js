function Auth($authProvider) {
  $authProvider.spotify({
    clientId: '8cf42704f94d4160a0006881e4855ce8',
    url: '/api/spotify'
  });
}

export default Auth;
