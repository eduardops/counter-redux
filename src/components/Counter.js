import React, { Component } from 'react'
import { connect } from "react-redux";
import {increment, decrement, increment_amount, decrement_amount} from '../redux/index'

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
            <button onClick={() => this.props.decrement()}>Decrement</button>
            <button onClick={() => this.props.increment()}>Increment</button>
            <button onClick={() => this.props.decrement_amount(this.props.counter)}>Decrement {this.props.counter}</button>
            <button onClick={() => this.props.increment_amount(this.props.counter)}>Increment {this.props.counter}</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = {
    increment,
    decrement,
    increment_amount,
    decrement_amount
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);