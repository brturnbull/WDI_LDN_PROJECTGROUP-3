SpotifyCtrl.$inject = ['$scope', '$http'];


function SpotifyCtrl() {

  function handleSubmit(){
    console.log('click2');
  }

  this.handleSubmit = handleSubmit;

}

export default SpotifyCtrl;
