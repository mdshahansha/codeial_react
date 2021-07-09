import React  from 'react'
import { connect } from 'react-redux'

import {fetchPosts} from '../actions/posts'

class App extends React.Component {
  //dispatch an action
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  
  render() {
    console.log("PROPS ",this.props);
    return (
      <div>
        App
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    posts:state.posts,
  };
}



export default connect(mapStateToProps)(App)

