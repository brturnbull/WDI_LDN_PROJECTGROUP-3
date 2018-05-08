MoodsNewCtrl.$inject =['$sce'];
//------------------------------------------------------------------------------
function MoodsNewCtrl($sce) {
  this.data = {};

  const playlistIds = {
    happy: ['37i9dQZF1DWWMOmoXKqHTD', '37i9dQZF1DX1g0iEXLFycr','37i9dQZF1DWXRvPx3nttRN', '37i9dQZF1DX2sUQwD7tbmL'],
    sad: ['37i9dQZF1DX7qK8ma5wgG1','37i9dQZF1DX3rxVfibe1L0','37i9dQZF1DX3YSRoSdA634'],
    surprised: ['37i9dQZF1DWSqmBTGDYngZ','37i9dQZF1DWVlYsZJXqdym','37i9dQZF1DX72Gcc60oKzC','37i9dQZF1DX843Qf4lrFtZ','5A1jPIIGL6FSpirRQlelSR'],
    neutral: ['37i9dQZF1DX1s9knjP51Oa','37i9dQZF1DX7K31D69s4M1','37i9dQZF1DX6FpuSJJgdDF','37i9dQZF1DWYckg2NJborB','37i9dQZF1DX7KrTMVQnM02'],
    scared: ['37i9dQZF1DWWqNJmH2i89D','37i9dQZF1DWUvQoIOFMFUT','37i9dQZF1DX3PIPIT6lEg5','37i9dQZF1DXa2PsvJSPnPf',''],
    disgust: ['37i9dQZF1DWUvQoIOFMFUT','37i9dQZF1DWVV27DiNWxkR','37i9dQZF1DX2pSTOxoPbx9','37i9dQZF1DXarebqD2nAVg','37i9dQZF1DWX83CujKHHOn']
  };

  function handleCreate() {
    // the mood chosen in the drop down
    const mood = this.data.mood;

    // calling the array of possible playlists ie. happy, sad etc
    const possiblePlaylistIds = playlistIds[mood];

    // selecting a playlist id at random from the array
    const playlistId = possiblePlaylistIds[Math.floor(Math.random() * possiblePlaylistIds.length)];
    this.playlistSrc = $sce.trustAsResourceUrl(`https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:${playlistId}`);
  }

  this.handleCreate = handleCreate;

}
//------------------------------------------------------------------------------
export default MoodsNewCtrl;
