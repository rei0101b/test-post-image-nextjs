# Next.js

Next.js は React をサーバーサイドで動かす、いわゆる Sever Side Rendering(SSR) を可能にするライブラリです。

それだけでなくディレクトリ構造でルーティングを定義できる機能があったり、Code Splitting をページ単位で行ってくれたり、Prefetch 機能が合ったりと非常に便利です。

## インストール

```
npm i next react react-dom
or
yarn add next react react-dom
```

## スクリプトを追加

```json
"scripts" : {
  "dev": "next"
}
```



## ルーティング用のページを追加

`pages` というディレクトリをプロジェクトルートに作ります。

そして `index.js` という名前で以下の Comoponent を書きます。

```js
import React from "react";

export default () => <h1>Hello World</h1>;
```

## 起動

```
npm run dev
or
yarn dev
```

localhost:3000 でサーバーが立ち上がります。

## ルーティングを追加する

pages/second.js を追加します。

```js
import React from "react";

export default () => <h1>This is a second page</h1>;
```
