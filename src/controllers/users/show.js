UsersShowCtrl.$inject = ['User', '$state'];
//-----------------------------------------------------------------------------
function UsersShowCtrl(User, $state){

  User.findById($state.params.id)
    .then(res => this.User = res.data);

  function buttonDelete(){
    User.removeById($state.params.id)
      .then(() => $state.go('usersIndex'));
  }
  this.buttonDelete = buttonDelete;
}
//-----------------------------------------------------------------------------
export default UsersShowCtrl;
