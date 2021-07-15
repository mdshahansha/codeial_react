import React, { Component } from "react";

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content:' ',
    };
  }
  handleOnClick=()=>{
      //disptach action
  }
  handleChange=()=>{
      this.setState({
          content:e.target.value,
      })
  }

  render() {
    return (
      <div classNmae="create-post">
        <textarea
          className="add-post"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <div>
            <button id="add-post-btn" onClick={this.handleOnClick}>
                Add Post
            </button>
        </div>


      </div>
    );
  }
}

export default componentName;
