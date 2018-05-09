uploadImage.$inject = ['filepickerService'];
//------------------------------------------------------------------------------
function uploadImage(filepickerService) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, element, attrs, model) => {

      element.on('click', () => {
        console.log(angular.element(document).find('iframe'));
      });

      element.bind('click', (e) => {
        e.preventDefault();
        //----------------------------------------------------------------------
        filepickerService
          .pick({
            accept: 'image/*',
            maxFiles: 1,
            uploadInBackground: false,
            service: 'WEBCAM'
          }, (data) => {
            // return data.filesUploaded[0].url;
            model.$setViewValue(data.url);
          });
      });
    }
  };
}
//------------------------------------------------------------------------------
export default uploadImage;
