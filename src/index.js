import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item+1);
    const decrementItem = () => setItem(item-1);

    return (
        <div className ="App">
        <h1>Hello {item}</h1>
        <div>
            <button onClick={incrementItem}>IncrementItem</button>
            <button onClick={decrementItem}>IncrementItem</button>

        </div>
        </div> 
    );
}

class AppUgly extends React.Component{
    state = {
        item : 0
    }

    render(){
        const {item} = this.state;
        return(
            <div className="App">
                <h1>Hello {item}</h1>
                <button onClick={this.incrementItem}>IncrementItem</button>
                <button onClick={this.decrementItem}>DecrementItem</button>
            </div>
        )
    }

    incrementItem = () => {
        this.setState(state => {
            return{
                item : state.item + 1
            }
        })
    }
    decrementItem = () => {
        this.setState(state => {
            return{
                item : state.item -1
            }
        })
    }
}

ReactDOM.render(<AppUgly />, document.getElementById('potato'));