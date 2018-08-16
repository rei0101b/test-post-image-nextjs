# React-Training

React/ReactNativeの演習用リポジトリです。特別な理由が無い限りはTypeScriptで実装してください。間違いをみつけたらPRください。

# 内容
## 設計基礎
- simple_flux_implementation
  - Fluxの基礎を学びます。具体的にはFluxの流れを理解するために実際にFluxを実装してみて、簡単なTODOリストアプリケーションに適応させます。
- simple_redux
  - Reduxの基礎を学びます。具体的にはsimple_flux_implementationで作ったTODOアプリケーションをReduxを使って再実装します。そして、ReduxDevToolsというRedux用のデバッグツールを使ってデバッグ方法を学びます。ついでにDucksというデザインパターンについても学びます。
- react_redux
  - React-Reduxの基礎を学びます。具体的にはsimple_fluxにReact-Reduxを使ってコンポーネント別にResuxStoreを接続する方法、パフォーマンスを考慮した使い方などを学びます。

## 設計応用
- typescript_fsa
  - Reduxに秩序を持ち込むFlux-standard-actionという仕様があり,
  これを簡単に導入できるtype-script-fsaというのがあります。簡単なアプリケーションをtypescript-fsaを使ってActionを書き換え、typescript-fsa-reducerを使ってReducerを書き換えてみます。
- redux_saga
  - redux-sagaというライブラリの使い方を学びます。redux-sagaは主に非同期アクションの実装時に使われることが多く、非同期アクション周りがtypescript-fsaと相性がよくスッキリ書けるのでそのあたりの実装も含めます。
