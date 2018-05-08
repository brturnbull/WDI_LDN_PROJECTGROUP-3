UsersShowCtrl.$inject = ['User', '$state', '$auth'];
//-----------------------------------------------------------------------------
function UsersShowCtrl(User, $state, $auth){

  User.findById($state.params.id)
    .then(res => this.User = res.data);

  function buttonDelete(){

    User.removeById($state.params.id)
      .then(() => $state.go('usersIndex'));
  }

  function isCurrentUser() {
    console.log(User);
    return this.User && $auth.getPayload().sub === this.User._id;
  }
  this.buttonDelete = buttonDelete;
  this.isCurrentUser = isCurrentUser;
}
//-----------------------------------------------------------------------------
export default UsersShowCtrl;
