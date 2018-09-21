import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    Count: 1
  }
  handleClickIncrement = () => {
      this.setState({
        Count: this.state.Count + 1
      })
  } 
 handleClickDecrement = () => {
   if (this.state.Count >= 1) {
     this.setState({
         Count: this.state.Count - 1,
     })
   }
 }
 handleClickReset = () => {
   this.setState({
     Count: 0,
   })
 }
  render() {
    const { Count } = this.state;
    console.log(Count);
    return (
      <section className="Counter">
        <h2>Count: {Count}</h2>
        <button onClick={this.handleClickIncrement} className="full-width">Increment</button>
        <button onClick={this.handleClickDecrement} className="full-width">Decrement</button>
        <button onClick={this.handleClickReset} className="full-width">Reset</button>
      </section>
    );
  }
}
