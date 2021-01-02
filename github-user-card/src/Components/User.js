import React from 'react';

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            userFollowers: ""
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/users/maggieappleton/followers')
        .then(response => response.json())
        .then(json => {
            this.setState({
                userFollowers: json
            })
        })
    }

    render() {
        return(
            <div className='UserCard'>User Div works
                <p>{this.props.user.name}</p>
                <p>{this.props.user.blog}</p>
                <p>{this.props.user.bio}</p>
                <p>{this.props.user.twitter_handle}</p>
                <p>{this.props.user.html_url}</p>
            </div>
        )
    }
}

export default User;





