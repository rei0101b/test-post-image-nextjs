## React

React を使う上での基本を紹介します。

## 環境設定

### node.js のインストール

https://nodejs.org/ja/

ついでに `yarn` も入れましょう。 `yarn` は npm と同じ node のパッケージマネージャです。

https://yarnpkg.com/ja/

### create-react-app をインストール

https://github.com/facebook/create-react-app

`create-react-app` というのは react アプリケーションを作るための環境設定をやってくれるツールです。

```
yan add global create-react-app
create-react-app my_app
...
```

これで `my_app` というフォルダに react アプリケーションが作成できる準備ができています。

デフォルトのスクリプトは以下のようになっており、`yarn start` でローカルサーバが立ち上がりアプリケーションが起動します。デフォルトは localhost:3000 です。

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
```

以下の演習では `App.js` を変更しながら動かしながら見ていくとわかりやすいと思います。

## Component の定義

React は Component という UI の単位で作っていきます。 Component の作り方は大きく分けて 2 つあります。

- React.Component を継承する 
- 関数として定義 Stateless Functional Component(SFC)

### React.Component

React パッケージの _Component_ クラスを継承する方法です。

```js
import React from "react";

class App extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
```

_render_ で return した View が表示されます。

_render_ は　`state`,　`props` が変更される時に呼ばれます(state, props については後述)。

React.Component を継承する方法では内部状態を持つことが出来ます。これの内部状態を _State_ といいいます。この _State_ を使って表示内容を変更します。

例として Input form の入力値を表示するプログラムを書いてみます。

form の入力値を保持する `name` という _State_ を定義します。*State*は以下のように初期化することができます。

そして `name` を表示するタグを作ります。 _State_ への参照は `this.state.name` という形で参照することができます。

初期状態を以下のように与える事もできます。

```js
class App extends React.Component {
  state = {
    name: "" // 初期化
  };

  render() {
    return <h1>{this.state.name}</h1>;
  }
}
```

次に inputform を設置して入力値を取得して `name` を更新してみましょう。

inputform の内容が変更されたイベントは input 要素の `onChange` にコールバックを設定することで取得できます。この `onChange` のように Component に渡す値を _Props_ といいます。 _Props_ については後から説明します。

以下のように `onChangeText` メソッドを作成して inputform の `onChange` のコールバックに設定しています。`onChange` は第一引数にイベントオブジェクトを持ちます。input 要素の場合は e.target.value で入力値が取得できます。

```jsx
class App extends React.Component {
  state = {
    name: "" // 初期化
  };

  onChangeText = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <input type="text" onChange={this.onChangeText} />
      </div>
    );
  }
}
```

### Props

Props とは Component の外部から与えられる値の事です。
App も独自 Component なのですが、ここで `name` を Props として受け取って表示するだけの UserName という Component を作ってみます。

```jsx
export class UserName extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}
```

Props には `this.props.XXX` という形式で参照できます。

以下のように UserName コンポーネントを使うことができます。

```js
class App extends React.Component {
  state = {
    name: "" // 初期化
  };

  onChangeText = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <UserName name={this.state.name} />
        <input type="text" onChange={this.onChangeText} />
      </div>
    );
  }
}
```

### Stateless Functional Component (SFC)

UserName コンポーネントは State を持たない Component でしたが、そのような場合に使えるのが Stateless Functional Component(以下 SFC)です。
SFC は Props を引数に取る関数として定義します。State を便利な反面、内部状態なのでテストがしにくいという問題があります。SFC は入力に対して一意のコンポーネントが返るのでデバッグや保守がしやすいというメリットがあります。
UserName コンポーネントを SFC 化すると以下のようになります。

```jsx
export const UserName = props => <h1>{props.name}</h1>;
```

## Lifecycle

React.Component を継承するとライフサイクルを使うことができます。
他にもありますが、よく使うやつを紹介します。

```js
class App extends React.Component {
  /**
   * 生成時の一番最初に呼ばれる。propsを引数にとり、super(props)を必ず呼ばなければならない。
   * stateの初期化をここで行っても良い
   * this.state = { name: 'no name' }
   */
  constructor(props) {
    super(props);
  }

  /**
   * 初回のrenderが呼ばれたあとに1度だけ呼ばれる
   * 表示直後の処理だったり、SSRアプリケーションがクライアントサイドで処理をしたいタイミングなどで使う
   */
  componentDidMount() {}

  /**
   * コンポーネントが削除される前に呼ばれる
   */
  componentWillUmnount() {}

  /**
   * stateやpropsに変更があったときやthis.foceUpdateが呼ばれた時に呼ばれる。
   * true/falseを返す必要があり、trueを返すとrenderが呼ばれ、falesを返すと呼ばれない
   * おもにパフォーマンスチューニング時に利用するが、
   * React.PureComponentがこの実装をしている（ただしShallow comparison)
   * default is true
   */
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  /**
   * propsまたはstateが更新された後に呼ばれる。初回renderには呼ばれない
   * 前の状態との差分を取って何かしたい時などに有効。
   * ただし、ここでsetStateを呼ぶとまたcomponentDidUpdateが呼ばれるので無限ループにならないよに注意
   */
  componentDidUpdate(prevProps, prevState, snapShot) {}
}
```
