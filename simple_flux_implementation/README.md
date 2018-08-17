# Simple Flux implementation

Fluxの演習です。

FluxとはFacebookが開発したデータの流れを一方向に制限したアーキテクチャです。

![Flux](./flux.png)

Actionはユーザのクリックイベントやシステムが発行するイベントなどを指します。Action常にはDispatcherというオブジェクトに渡されます。このActionはActionCreatorという関数によって生成されるオブジェクトです。DispatcherはStoreに対してActionを通知します。Storeは状態を持ち、受け取ったActionに応じてその状態を変化させます。状態が変化したら変更したいイベントを起こします。ViewはStoreの変更イベントを監視してイベントを受け取るとStoreの状態を読み出してViewを更新します。これがFluxの流れです。

以下の資料にFluxの簡単な説明と実装について書いてあります。
http://azu.github.io/slide/react-meetup/flux.html

## 演習内容
Fluxの理解を深めるための演習です。

このプロジェクトは超簡単で質素なTODOリストアプリケーションが実装してあります。言語はTypeScriptです。
このプロジェクトを上記の資料を参考にしてAction -> Dispatcher -> Store -> ViewとなるようなFlux実装をしてください。

具体的には、FluxのStore,ActionCreator,Dispatcher(資料ではEventEmitter)を実装してApp.tsxがstateを持たなくても動作するようにしてください。

答えanswerディレクトリにあります。

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
