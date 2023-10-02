import React from 'react'
import { Provider } from 'react-redux'
import Store from './redux/Store'
import Home from './Home'

const App = () => {
  return (
    <Provider store={Store}>
      <Home></Home>
    </Provider>
  )
}

export default App

