import React, { Component } from 'react';
import Card from "./Card";

class ListApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            budgets: [],
            isLoaded: false,
        }
    };
    componentDidMount = () => {
        fetch('http://localhost:3000/api/v1/budgets.json')
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
                isLoaded: true,
                 budgets: resp
            })
            console.log(this.state.budgets)
        })
    };

    render() {
    var { isLoaded, budgets } = this.state;
    return (
      <div>
        {budgets.map(budget => (<Card key={budget.id} budget={budget} />))}
      </div>
    );
  }
}

export default ListApp;
