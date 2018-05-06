function moodsNewCtrl() {
  this.data = {};

  const playlistIds = {
    happy: ['37i9dQZF1DWWMOmoXKqHTD', '37i9dQZF1DWWMOmoXKqHTD', '37i9dQZF1DWWMOmoXKqHTD'],
    sad: ['37i9dQZF1DWWMOmoXKqHTD', '37i9dQZF1DWWMOmoXKqHTD', '37i9dQZF1DWWMOmoXKqHTD']
  };

  function handleCreate() {
    const mood = this.data.mood;
    const possiblePlaylistIds = playlistIds[mood];
    const randomPlaylistId = possiblePlaylistIds[Math.floor(Math.random() * possiblePlaylistIds.length)];

    console.log(randomPlaylistId);
  }

  this.handleCreate = handleCreate;
}

export default moodsNewCtrl;
