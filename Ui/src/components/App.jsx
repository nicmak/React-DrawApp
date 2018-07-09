import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Example1 from './Example1'
import Example2 from './Example2'

class App extends Component {
  render() {
    return (
      <section>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Example1} />
            <Route path='/exmaple' component={Example2} />
          </Switch>
        </BrowserRouter>
      </section>
    )
  }
}

export default App
