# ToDoList App

React + Vite で作ったシンプルなTODOリストアプリです。

## 機能

- タスクの追加（テキスト + 期限）
- タスクの完了/未完了切替（クリックで切替）
- タスクの削除（削除前に確認ダイアログ表示）
- 並び替え：登録順 or 期限順
- シンプルで見やすい UI


## 実行方法
1. リポジトリをクローン
git clone https://github.com/Oshima-IS13L/todo-list.git
cd todo-list/my-app
2. 依存関係のインストール

npm install


3. 開発サーバーの起動

npm run dev


4. ブラウザで表示
通常は http://localhost:5173にアクセス

## 今後の拡張案

タスクのローカルストレージ保存（ページ更新しても残る）

カテゴリや優先度の追加

モバイル対応やレスポンシブデザイン

フィルター機能（完了済み / 未完了）

## ファイル構成
```bash
my-app/
├─ src/
│ ├─ App.jsx # メインコンポーネント
│ ├─ index.css # グローバルスタイル
│ ├─ App.css # 個別スタイル
│ ├─ main.jsx # React のエントリーポイント
│ └─ assets/ # 画像やアイコンなど
├─ package.json # プロジェクト設定・依存関係
