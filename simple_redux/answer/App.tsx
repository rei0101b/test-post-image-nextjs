import * as React from 'react'
import { MouseEventHandler, ChangeEventHandler } from 'react'
import { createStore } from 'redux'
import Store from './Store'
import { addToTodos, updateNewTodo } from './ActionCreator'

class App extends React.Component {
  store = createStore(Store)

  constructor(props: any) {
    super(props)
    this.store.subscribe(() => this.forceUpdate())
  }

  onUpdateNewTodo: ChangeEventHandler<HTMLInputElement> = e => this.store.dispatch(updateNewTodo(e.target.value))

  onClickSubmit: MouseEventHandler<HTMLInputElement> = e => {
    e.preventDefault()
    this.store.dispatch(addToTodos())
  }

  render() {
    const { newTodo, todos } = this.store.getState()
    console.log(this.store.getState())
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>TODO list</h1>
        <form>
          <input
            style={{
              border: 'solid 1px rgba(0, 0, 0, .1)',
              padding: '0.5em',
              marginRight: '1em'
            }}
            value={newTodo}
            onChange={this.onUpdateNewTodo}
          />
          <input type="submit" onClick={this.onClickSubmit} />
        </form>
        <ul>
          {todos.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
