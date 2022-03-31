import { HOME_ITEMS , USER_LIST, DELETE_USER} from '../Constants'
export const UserList = (data) => {
  console.warn("action", data);
  return {
    type:  USER_LIST,
    data: data,
  };
};

export const HomeItems = (data) => {
    console.warn("action", data);
    return {
      type:  HOME_ITEMS,
      data: data,
    };
  };

  export const DeleteUserList = (data) => {
    return {
      type: DELETE_USER,
      data:data,
    }
  };