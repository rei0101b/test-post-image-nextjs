import * as React from 'react'
import { MouseEventHandler, ChangeEventHandler } from 'react'
import { bindActionCreators } from 'redux'
import { Store } from './Store'
import * as ActionCreators from './ActionCreator'
import { connect } from 'react-redux'

interface Props {
  newTodo: string
  todos: string[]
  updateNewTodo: (newTodo: string) => void
  addToTodos: () => void
}

class App extends React.Component<Props> {
  onUpdateNewTodo: ChangeEventHandler<HTMLInputElement> = e => this.props.updateNewTodo(e.target.value)

  onClickSubmit: MouseEventHandler<HTMLInputElement> = e => {
    e.preventDefault()
    this.props.addToTodos()
  }

  render() {
    const { newTodo, todos } = this.props
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

const mapStateToProps = (store: Store) => ({
  todos: store.todos,
  newTodo: store.newTodo
})

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(ActionCreators, dispatch)
})

const mergeProps = (mp: { todos: string[]; newTodo: string }, md: { actions: any }): Props => ({
  newTodo: mp.newTodo,
  todos: mp.todos,
  addToTodos: md.actions.addToTodos,
  updateNewTodo: md.actions.updateNewTodo
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(App)
