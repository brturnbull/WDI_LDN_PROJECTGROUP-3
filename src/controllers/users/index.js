UsersIndexCtrl.$inject = ['Wine'];
//-----------------------------------------------------------------------------
function UsersIndexCtrl(User) {
  this.all = [];
  User.find()
    .then(res => this.all = res.data);
}
//-----------------------------------------------------------------------------
export default UsersIndexCtrl;
