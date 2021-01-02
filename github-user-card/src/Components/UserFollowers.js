import React from 'react';

class UserFollowers extends React.Component {
    constructor() {
        super();
        this.state = {
            userFollowers: ""
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/users/rhmichelle/followers')
        .then(response => response.json())
        .then(json => {
            this.setState({
                userFollowers: json
            })
        })
    }

    render() {
            return(
            <div className='UserCard'>
                <h2>User Followers</h2>
            </div>
        )
    }
}

export default UserFollowers;
