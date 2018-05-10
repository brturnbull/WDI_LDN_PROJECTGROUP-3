UsersShowCtrl.$inject = ['User', '$state', '$auth'];
//-----------------------------------------------------------------------------
function UsersShowCtrl(User, $state, $auth){

  User.findById($state.params.id)
    .then(res => this.user = res.data);

  function buttonDelete(){

    User.removeById($state.params.id)
      .then(() => $state.go('usersIndex'));
  }
  //this function sets button elements to be visible or not if user matchs the user show
  function isCurrentUser() {
    return this.user && $auth.getPayload().sub === this.user._id;
  }
  this.buttonDelete = buttonDelete;
  this.isCurrentUser = isCurrentUser;
}
//-----------------------------------------------------------------------------
export default UsersShowCtrl;
