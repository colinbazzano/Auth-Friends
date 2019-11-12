import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        },
        isLoggedIn: false
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Log In</button>
                </form>
            </div>
        )
    }
}