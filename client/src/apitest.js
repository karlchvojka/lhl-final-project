import React, { Component } from 'react';
import Card from "./components/Card";

class ListApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            isLoaded: false,
        }
    };
    componentDidMount = () => {
        fetch('http://localhost:3000/api/v1/users.json')
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
                isLoaded: true,
                users: resp
            })
            console.log(this.state.users)
        })
    };

    render() {
    var { isLoaded, users } = this.state;
    return (
      <div>
        {users.map(user => (<Card key={user.id} user={user} />))}
      </div>
    );
  }
}

export default ListApp;
