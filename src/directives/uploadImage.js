uploadImage.$inject = ['filepickerService'];
//------------------------------------------------------------------------------
//filestack function that uses the ng model/ link scope element element bind
//relates to camera access.
function uploadImage(filepickerService) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, element, attrs, model) => {
      element.bind('click', (e) => {
        e.preventDefault();
        //----------------------------------------------------------------------
        // .pick refers to the picker which is the box opened.accepts images with a maximum of one.
        // uploadbackground means no upload as soon as selected but when confirmed.
        //sources is the access to the different means of uploading (url,files,computer ect)
        // data is then put into a url to be used anywhere as it isnt specific to the location
        filepickerService
          .pick({
            accept: 'image/*',
            maxFiles: 1,
            uploadInBackground: false,
            fromSources: ['local_file_system', 'webcam']
          }, (data) => {
            model.$setViewValue(data.url);
          });
      });
    }
  };
}
//------------------------------------------------------------------------------
export default uploadImage;
