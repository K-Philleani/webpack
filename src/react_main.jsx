import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello'
    }
  }

  render() {
    return (
      <h2>{ this.state.message }</h2>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))