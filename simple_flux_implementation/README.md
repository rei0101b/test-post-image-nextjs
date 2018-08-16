# Simple Flux implementation

Fluxの演習です。

以下の資料にFluxの簡単な説明と実装について書いてあります。
http://azu.github.io/slide/react-meetup/flux.html

## 演習内容
Fluxの理解を深めるための演習です。

このプロジェクトは超簡単で質素なTODOリストアプリケーションが実装してあります。言語はTypeScriptです。
このプロジェクトを上記の資料を参考にしてステートフルな実装からFluxを使ったステートレスな実装にしてください。

具体的には、Fluxのstore, action, dispatcherを実装してApp.tsxがstateを持たなくても動作するようにしてください。

演習は

## 実行環境
nodeのstableバージョンを入れてください。

ローカルサーバー起動

```
yarn start
// または
npm start
```

## ヒント
### Store
- todos: string[]
- newTodo: string

### アクション
アクションは2種類です。
- updateNewTodo
  - 入力中の情報を保持する
- addToTodos
  - newTodoをtodosに追加
