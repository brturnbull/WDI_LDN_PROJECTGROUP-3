MoodsNewCtrl.$inject =['$sce', '$scope', '$http'];
//------------------------------------------------------------------------------
function MoodsNewCtrl($sce, $scope, $http) {
  const vm = this;

  //creating an empty object to later reference the data through
  vm.data = {};
  vm.playlistName;

  //list of playlistIDs to be selected randomly on getting the face + emotion back
  const playlistIds = {
    happiness: ['37i9dQZF1DWWMOmoXKqHTD', '37i9dQZF1DX1g0iEXLFycr','37i9dQZF1DWXRvPx3nttRN', '37i9dQZF1DX2sUQwD7tbmL'],
    sadness: ['37i9dQZF1DX7qK8ma5wgG1','37i9dQZF1DX3rxVfibe1L0','37i9dQZF1DX3YSRoSdA634', '1a7ZGpS7Ugpees7e7eP6My', '6HqkpSVL58RuH1lczr8yVz'],
    surprise: ['37i9dQZF1DWSqmBTGDYngZ','37i9dQZF1DWVlYsZJXqdym','37i9dQZF1DX72Gcc60oKzC','37i9dQZF1DX843Qf4lrFtZ','5A1jPIIGL6FSpirRQlelSR'],
    neutral: ['37i9dQZF1DX1s9knjP51Oa','37i9dQZF1DX7K31D69s4M1','37i9dQZF1DX6FpuSJJgdDF','37i9dQZF1DWYckg2NJborB','37i9dQZF1DX7KrTMVQnM02'],
    fear: ['37i9dQZF1DWWqNJmH2i89D','37i9dQZF1DWUvQoIOFMFUT','37i9dQZF1DX3PIPIT6lEg5','37i9dQZF1DXa2PsvJSPnPf','6Q11LVrCtVUxHoGfLkMosK', '18hCAicGEDa5S7sMmX0gdf'],
    disgust: ['37i9dQZF1DWUvQoIOFMFUT','37i9dQZF1DWVV27DiNWxkR','37i9dQZF1DX2pSTOxoPbx9','37i9dQZF1DXarebqD2nAVg','37i9dQZF1DWX83CujKHHOn'],
    anger: ['37i9dQZF1DWTcqUzwhNmKv', '37i9dQZF1DX9qNs32fujYe', '5s7Sp5OZsw981I2OkQmyrz', '37i9dQZF1DX0pH2SQMRXnC', '37i9dQZF1DWSqBruwoIXkA', '37i9dQZF1DWYMvTygsLWlG']
  };





  function handleCreate() {
    // the "emotion/mood" sent back via faceplus
    const mood = vm.data.mood;

    // calling the array of possible playlists ie. happy playlists, sad playlists etc
    const possiblePlaylistIds = playlistIds[mood];

    // selecting a playlist id at random from the array
    const playlistId = possiblePlaylistIds[Math.floor(Math.random() * possiblePlaylistIds.length)];

    // creating a "trusted resource" and appending the randomly selected playlist id to the end of the URL
    vm.playlistSrc = $sce.trustAsResourceUrl(`https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:${playlistId}`);



    $http.get(`/api/playlists/${playlistId}`)
      // .then(res => console.log(res.data.name));
      .then(res => vm.playlistName = res.data.name);
  }

  function getMood() {
    // don't make the api request unless we have received the data to send
    if(!vm.data.imageUrl) return false;

    $http.post('/api/faceplus', vm.data)
      // taking the response we get from posting to faceplus and assigning that locally
      .then(res => vm.data.mood = res.data);
  }

  // watching for the change in the photo uploader, before calling the getMood function
  $scope.$watch(() => vm.data.imageUrl, getMood);

  // binds the context of handleCreate to the controller rather than the window
  vm.handleCreate = handleCreate;


}
//------------------------------------------------------------------------------
export default MoodsNewCtrl;
