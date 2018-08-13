import * as React from 'react'
import { MouseEventHandler, ChangeEventHandler } from 'react'

interface State {
  todos: string[]
  newTodo: string
}

class App extends React.Component<{}, State> {
  state: State = {
    todos: [],
    newTodo: ''
  }

  onChangeNewTodo: ChangeEventHandler<HTMLInputElement> = e => {
    this.setState({ newTodo: e.target.value })
  }

  onClickSubmit: MouseEventHandler<HTMLInputElement> = e => {
    e.preventDefault()
    this.setState(({ todos, newTodo }) => ({ todos: [newTodo, ...todos], newTodo: '' }))
  }

  render() {
    const { newTodo, todos } = this.state
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
            onChange={this.onChangeNewTodo}
          />
          <input type="submit" onClick={this.onClickSubmit} />
        </form>
        <ul>
          {todos.map(todo => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
