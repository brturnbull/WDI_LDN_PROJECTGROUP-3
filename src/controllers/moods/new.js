MoodsNewCtrl.$inject =['$http'];

function MoodsNewCtrl($http) {
  this.data = {};

  const playlistIds = {
    happy: ['37i9dQZF1DWWMOmoXKqHTD', '37i9dQZF1DX9XIFQuFvzM4', '37i9dQZF1DX1g0iEXLFycr','37i9dQZF1DWXRvPx3nttRN', '37i9dQZF1DX2sUQwD7tbmL'],
    sad: ['37i9dQZF1DX7qK8ma5wgG1','37i9dQZF1DX7qK8ma5wgG1','37i9dQZF1DX3YSRoSdA634','37i9dQZF1DX7gIoKXt0gmx','6Qf2sXTjlH3HH30Ijo6AUp'],

    surprised: ['37i9dQZF1DWSqmBTGDYngZ','','','',''],
    neutral: ['37i9dQZF1DX1s9knjP51Oa','37i9dQZF1DX7K31D69s4M1','','',''],
    scared: ['37i9dQZF1DWWqNJmH2i89D','37i9dQZF1DWUvQoIOFMFUT','37i9dQZF1DX3PIPIT6lEg5','',''],
    disgust: ['37i9dQZF1DWUvQoIOFMFUT','37i9dQZF1DWVV27DiNWxkR','','','']
  };


https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX3PIPIT6lEg5?si=yAfQQ5GbR8uwyDc_Kmz1bw
  function handleCreate() {
    // the mood chosen in the drop down
    const mood = this.data.mood;

    // calling the array of possible playlists ie. happy, sad etc
    const possiblePlaylistIds = playlistIds[mood];

    // selecting a playlist id at random from the array
    const randomPlaylistId = possiblePlaylistIds[Math.floor(Math.random() * possiblePlaylistIds.length)];

    console.log(randomPlaylistId);

    // make an ajax request to /api/playlists/${randomPlaylistId} before rendering the data

    $http.get(`/api/playlists/${randomPlaylistId}`)
      .then(res => this.playlist = res.data)
      .then(console.log(this.data));
  }

  this.handleCreate = handleCreate;

}

export default MoodsNewCtrl;
