uploadImage.$inject = ['filepickerService'];
function uploadImage(filepickerService) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, element, attrs, model) => {
      element.bind('click', (e) => {
        e.preventDefault();

        filepickerService
          .pick({
            accept: 'image/*',
            maxFiles: 1,
            uploadInBackground: false,
            fromSources: ['local_file_system', 'webcam']
          }, (data) => {
            // return data.filesUploaded[0].url;
            model.$setViewValue(data.url);
          });
      });
    }
  };
}

export default uploadImage;
