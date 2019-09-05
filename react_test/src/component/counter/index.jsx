import React from 'react';

class Counter extends React.Component {

    state = {
        counter : 0
    }

    increment  = () =>
    {
        let {counter} = this.state;
        counter += 1;
        this.setState({
            counter
        });
    }
    decrement  = () =>
    {
        let {counter} = this.state;
        counter -= 1;
        this.setState({
            counter
        });
    }

    render( props ){
        let {counter} = this.state;
        return (
            <div>
                <h1>Counter : <p>{counter}</p></h1>
                <button className="increment" onClick={this.increment}>Increment</button>
                <button className="decrement" onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
};

export default Counter;