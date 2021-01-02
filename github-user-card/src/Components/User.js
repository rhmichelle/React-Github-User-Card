import React from 'react';

class User extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className='UserCard'>User Div works
                {/* <p>{this.props.name}</p>
                <p>{this.props.blog}</p>
                <p>{this.props.bio}</p>
                <p>{this.props.twitter_handle}</p>
                <p>{this.props.html_url}</p> */}
            </div>
        )
    }
}

export default User;





