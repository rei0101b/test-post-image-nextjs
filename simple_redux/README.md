# Simple Redux

Reduxの演習です。

ReduxとはFluxの実装です。Fluxの実装では一番使われています。

[Official site](https://redux.js.org/)

[日本語の解説](https://qiita.com/kiita312/items/49a1f03445b19cf407b7)

重要なのは3つの原則です(https://github.com/reduxjs/redux/blob/master/docs/introduction/ThreePrinciples.md)

### Simgle source of truth
ReduxではState（前の演習ではStoreでしたが）は基本的に1つです。そのストアに対して変更のアクションと監視を行います。ストアはただのJSONです。
```
console.log(store.getState())

/* Prints
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
*/
```

### State is read-only
Stateは読み取り専用です。store.getState()を直接書き換えるようなことはしてはいけません。変更は必ずActionを発行してReducer経由で行います。ActionはTypeというActionを一意に判別できる識別子を持つJSONです。Type以外の構造については決まりはありません。

```
store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1
})

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})
```

### Changes are made with pure functions
変更はReducerと呼ばれるPure Functionで行います。Reducerは第一引数に前のStateを持ち、第2引数にActionをもちます。前のStateが無い（初期化）の場合のためにStateの初期状態を宣言する必要があります。
例えばvisibilityFilterというReducerはフィルタの変更のためのReducerで初期状態は'SHOW_ALL', で 'SET_VISIBILITY_FILTER'というActionが来たらstateを'SET_VISIBILITY_FILTER'に変更するというものです。

```
function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
```

## 演習内容
Reduxの実装に慣れるめの演習です。

Reduxを使った開発では以下の手順で始めるのが良いと思います。

- 必要な状態を決める（Stateの設計）
- Stateはどのようなパターンで変更するか（Actionの設計）
- 具体的にどのように変更するか（Reducerの設計）
- どこでActionを発行するか（ActionのDispatch）
- どこがStoreの変更を監視する必要があるか（変更の監視）

演習の内容を上記の手順に合わせて具体的な文字に起こすと

- 必要な状態を決める（Stateの設計）
  - todosという今現在のTodoを持つstring型の配列
  - newTodoという現在編集中の新しく追加される可能性があるstring型の変数
- Stateはどのようなパターンで変更するか（Actionの設計）
  - 'UPDATE_NEW_TODO'というnewTodoを更新するAction
  - 'ADD_TO_TODOS'というnewTodoをtodosに追加してnewTodoを初期化するAction
- 具体的にどのように変更するか（Reducerの設計）
  - 'UPDATE_NEW_TODO'というtypeのActionが来たらStateのnewTodoをActionのペイロードで置き換えたStateを返す
  - 'ADD_TO_TODOS'というtypeのActionが来たらStateのnewTodoをtodosに追加して、newTodoを初期化したStateを返す。
- どこでActionを発行するか（ActionのDispatch）
  - UPDATE_NEW_TODOはフォームの内容が変わった時
  - ADD_TO_TODOSは変更がサブミットされた時
- どこがStoreの変更を監視する必要があるか（変更の監視）
  - todoリストを表示するコンポーネント内

このプロジェクトはsimple_flux_implementationのの解答例の状態です（つまりはFluxの独自実装の状態）。
上記の資料や演習内容を読んで、このプロジェクトをReduxを使って書き換えてください。

## 必要なパッケージ
Reduxをインストールしてください。

## 実行環境
nodeのstableバージョンを入れてください。

ローカルサーバー起動

```
yarn start
// または
npm start
```