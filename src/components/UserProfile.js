import { func } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchUserProfile} from '../actions/profile'

 class UserProfile extends Component {

    componentDidMount(){
        const {match}=this.props;

        if(match.params.userId){
            //disspatch an action
            this.props.dispatch(fetchUserProfile(match.params.userId));
        }
    }

    render() {
        console.log("this.props",this.props);
        const {match:{params}}=this.props;

        const user=profile.user;

        return (
            <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>
 
        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">{user.name}</div>
        </div>
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>
        
        <div className="btn-grp">
         
            <button className="button save-btn"  >
              Add Friend
            </button>
            </div>

        </div>
        )
    }
}
function mapStateToProps({props}){
  return{
    profile,

  }
}

export default connect(mapStateToProps)(UserProfile);