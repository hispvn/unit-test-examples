import React from 'react';
import Counter from '../counter';

const createRange = num => Array.from(Array(num).keys());

class ConuterList extends React.Component {

    state = {
        numCounters : 2
    }

    addCounter  = () => {
        this.setState( prevState => ({
            numCounters : prevState.numCounters + 1
        }));
    }

    renderCounter(index){
        return (
            <li key={index}>
                <Counter/>
            </li>
        )
    }

    render(){
        const countersArray = createRange( this.state.numCounters );
        return (
        
        <div>
            <button data-test="btnAddCounter" onClick={this.addCounter}>Add Counter</button>
            <ul>
                {countersArray.map(num => this.renderCounter(num))}
            </ul>
        </div>
        );
    }
};
export default ConuterList;