import React, { useReducer } from "react";
import UsersReducer from "../reducers/UsersReducer";

export const UsersContext = React.createContext();
const UsersContextProvider = (props) => {
  const initialState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(UsersReducer, initialState);

  const clearResults = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  const searchUser = (keyword) => {
    setLoading();
    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: "SEARCH_USERS",
            users: data.items,
          });
        });
    }, 1000);
  };
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };
  return (
    <UsersContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        clearResults,
        searchUser,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
