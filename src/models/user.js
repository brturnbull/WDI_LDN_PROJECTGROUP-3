User.$inject = ['$http'];

function User($http){
  function find(){
    return $http.get('/api/users');
  }
  function findById(id){
    return $http.get(`/api/users/${id}`);
  }
  this.find = find;
  this.findById = findById;
}
