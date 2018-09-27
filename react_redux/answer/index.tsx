import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import Store from './Store'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={createStore(Store)}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
