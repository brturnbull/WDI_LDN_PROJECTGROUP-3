UsersShowCtrl.$inject = ['User', '$state'];
//-----------------------------------------------------------------------------
function UsersShowCtrl(User, $state){

  User.findById($state.params.id)
    .then(res => this.User = res.data);
}
//-----------------------------------------------------------------------------
export default UsersShowCtrl;
