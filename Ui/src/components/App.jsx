import React, { Component } from 'react'
import socketIOClient from "socket.io-client";
import Canvas from './canvas'


class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: 'http://localhost:3000/'
    }
  }

  componentDidMount() {
    // this.connectToSocket();
  }

  connectToSocket = () => {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint)
    socket.on('connect', () => {
      console.log('Able to connnect to socket server')
    })
  }
  render() {
    return (
      <section>
      Test
        <Canvas />
      </section>
    )
  }
}

export default App
