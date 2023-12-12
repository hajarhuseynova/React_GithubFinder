import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }
  onChange = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.searchUser(this.state.keyword);
    this.setState({
      keyword: "",
    });
  };

  render() {
    return (
      <div className="container my-3">
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              value={this.state.keyword}
              type="text"
              onChange={this.onChange}
              className="form-control"
            />
            <button className="btn btn-primary" type="submit">
              Find
            </button>
          </div>
        </form>
        <button className="btn btn-outline-danger mt-2 block">Delete</button>
      </div>
    );
  }
}

export default Search;
