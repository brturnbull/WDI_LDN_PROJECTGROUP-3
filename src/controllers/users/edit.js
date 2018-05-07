UsersEditCtrl.$inject = ['User', '$state'];
//-----------------------------------------------------------------------------
function UsersEditCtrl(User, $state){
  this.data = {};

  User.findById($state.params.id)
    .then(res => this.user = res.data);
  function buttonUpdate(){
    User.updateById($state.params.id, this.user)
      .then(() => $state.go('usersShow', $state.params ));
  }
  this.buttonUpdate = buttonUpdate;
}
//-----------------------------------------------------------------------------
export default UsersEditCtrl;
