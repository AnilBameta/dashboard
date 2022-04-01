import { UserList, DeleteUserList } from "../../services/actions/Action";
import UserListPage from "../../pages/userList/UserList";
import { connect } from "react-redux";

function UserListContainer(props) {
  console.log("Home container", props);
  return <UserListPage {...props} />;
}

const mapStateToProps = (state) => ({
  data: state,
});
const mapDispatchToProps = (dispatch) => ({
  UserListReduxData: (data) => dispatch(UserList(data)),
  UserListDeleteData: (data) => dispatch(DeleteUserList(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
