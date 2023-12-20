import React, { useContext, useState } from "react";
import { UsersContext } from "../contexts/UsersContext";
import { AlertContext } from "../contexts/AlertContext";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const { searchUser, users, clearResults } = useContext(UsersContext);
  const { displayAlert } = useContext(AlertContext);

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (keyword === "") {
      displayAlert("Something wrong!", "danger");
    } else {
      searchUser(keyword);
      setKeyword("");
    }
  };

  return (
    <div className="container my-3">
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input
            value={keyword}
            type="text"
            onChange={onChange}
            className="form-control"
          />
          <button className="btn btn-primary" type="submit">
            Find
          </button>
        </div>
      </form>
      {users.length > 0 && (
        <button
          onClick={clearResults}
          className="btn btn-outline-danger mt-2 block"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default Search;
