# React-Training

React/ReactNative の演習用リポジトリです。特別な理由が無い限りは TypeScript で実装してください。間違いをみつけたら PR ください。

# 内容

## 設計基礎

- simple_flux_implementation
  - Flux の基礎を学びます。具体的には Flux の流れを理解するために実際に Flux を実装してみて、簡単な TODO リストアプリケーションに適応させます。
- simple_redux
  - Redux の基礎を学びます。具体的には simple_flux_implementation で作った TODO アプリケーションを Redux を使って再実装します。そして、ReduxDevTools という Redux 用のデバッグツールを使ってデバッグ方法を学びます。ついでに Ducks というデザインパターンについても学びます。
- react_redux
  - React-Redux の基礎を学びます。具体的には simple_flux に React-Redux を使ってコンポーネント別に ResuxStore を接続する方法、パフォーマンスを考慮した使い方などを学びます。

## 設計応用

- typescript_fsa
  - Redux に秩序を持ち込む Flux-standard-action という仕様があり,
    これを簡単に導入できる type-script-fsa というのがあります。簡単なアプリケーションを typescript-fsa を使って Action を書き換え、typescript-fsa-reducer を使って Reducer を書き換えてみます。
- redux_saga
  - redux-saga というライブラリの使い方を学びます。redux-saga は主に非同期アクションの実装時に使われることが多く、非同期アクション周りが typescript-fsa と相性がよくスッキリ書けるのでそのあたりの実装も含めます。
