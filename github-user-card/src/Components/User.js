import React from 'react';
import UserFollowers from './UserFollowers'

class User extends React.Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div className='UserCard'>
                <h2>User Card</h2>
                <p>{this.props.user.name}</p>
                <p>{this.props.user.blog}</p>
                <p>{this.props.user.bio}</p>
                <p>{this.props.user.twitter_handle}</p>
                <p>{this.props.user.html_url}</p>
                <UserFollowers />
            </div>
            
        )
    }
}

export default User;





