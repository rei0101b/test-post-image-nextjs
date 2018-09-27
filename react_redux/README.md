# react-redux


公式のリファレンスです　[Official Reference](https://https://github.com/reduxjs/react-redux)

原の所属の会社の技術ブログです。react-reduxについて解説しています。

[react-reduxの解説：Reduxのパフォーマンスについて](http://anect.hatenablog.com/entry/2018/04/05/124654)

[react-reduxの解説：mergePropsの役割について](http://anect.hatenablog.com/entry/2018/04/18/190841)

react-reduxとはReactのコンポーネントに効率よくReduxのStateを接続するライブラリです。

react-reduxがやってくるれることは以下です。

- Redux Stateの監視
- Redux Stateとの接続
- actionの作成
- コンポーネントのレンダリングのパフォーマンスチューニング

# セットアップ

react-reduxを使うには `Provider` というでルートのコンポーネントを囲まなければなりません。

```js

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";
// storeの実態はcreateStore(Store)

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
```

こうすることで `Provider` の子Componentはreact-reduxを経由して Redux stateにアクセスできます。

# Redux stateに接続する

## 単純に接続する

```js
import { connect } from 'react-redux'
import View from './View'

export default connect()(View)
//ViewはPropsとしてdispatchを受け取る。ストアの監視はしない
```

## Stateから必要な値を取り出す `mapStateToProps`

```js
import { connect } from 'react-redux'
import View from './View'

// stateはReduxのstate, ownはconnectが返すコンポーネントに与えられたProps
const mapStateToProps = (state, own) => ({
  todos: state.todos
})

export default connect(mapStateToProps)(View)
/** connectの第1引数はRedux state を引数に取る関数です。ここでreturnしたものがViewのPropsとして渡されます。
 * また、todosの変更を監視し変更が合った場合には再レンダリングされます。
 * Viewは{ todos } を受け取る
*/
```

## ActionをDispatchできるようにする `mapDispatchToProps`

```js
import { bindActionCreators } from 'redux'
import * as actionCreators from './actionCreators'
import { connect } from 'react-redux'
import View from './View'

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) =>
  ({ actions: bindActionCreators(actionCreators, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(View)
/**
 * Viewは{ todos, actions }のPropsを受け取る
 * bindActionCreatorsを使うことで手動でdispatchする事無くActionを実行することで発行ができる
 * const addToTodos = () => ({
    type: ActionTypes.ADD_TO_TODOS
  })
  本来ならばdispatch(addToTods())としなければならないが、bindActionCreatorを使うことでaddToTodos()でdispatchできる。
  でもあんまり使わない。
 */
```

## mapStateToPropsとdispatchToPropsを更に加工する `mergeProps`

```js
import { bindActionCreators } from 'redux'
import * as actionCreators from './actionCreators'
import { connect } from 'react-redux'
import View from './View'

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) =>
  ({ actions: bindActionCreators(actionCreators, dispatch) })

//mpはmapStateToPropsの結果、mdはmapDispatchToPropsの結果,
const mergeProps = (mp, md, own) => ({
  todos: mp.todos,
  addToTodos: md.actions.addTodos,
  updateNewTodo: md.actions.updateNewTodo
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(View)
/**
 * Viewは{ todos, addToTods, updateNewTodo} のPropsを受け取る
 */

```


## 演習内容
Appをreact-reduxをつかってconnectして下さい。

## 必要なパッケージ
Reduxをインストールしてください。
```
yarn add react-redux
// または
npm i react-redux
```

## 実行環境
nodeのstableバージョンを入れてください。

ローカルサーバー起動

```
yarn start
// または
npm start
```
