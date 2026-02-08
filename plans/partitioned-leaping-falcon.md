# Plan: フローティングカードをドラッグで移動可能にする

## Context

現在、`.floating-tr` のフローティングカードは `position: fixed; top: 24px; right: 24px;` で画面右上に固定されている。これをマウス（およびタッチ）のドラッグ操作で自由に移動できるようにする。

## Implementation

### 1. JavaScript ファイルの作成: `script.js`

ドラッグ処理のロジックを実装する:

- `.floating-tr` 要素を取得
- `mousedown` / `touchstart` でドラッグ開始
  - クリック位置と要素位置のオフセットを計算
  - `right` プロパティを解除し、`left` に切り替える（ドラッグ中は `left/top` で制御）
- `mousemove` / `touchmove` で要素の `left` / `top` を更新
- `mouseup` / `touchend` でドラッグ終了
- 画面外にはみ出さないようクランプ処理を追加

### 2. `style.css` の変更

- `.floating-tr` に `cursor: grab;` を追加（ドラッグ可能であることを視覚的に示す）
- ドラッグ中のスタイル用に `.dragging` クラスを追加: `cursor: grabbing;`

### 3. `index.html` の変更

- `</body>` の直前に `<script src="./script.js"></script>` を追加

## Files to modify

- `style.css` — cursor スタイル追加
- `index.html` — script タグ追加
- `script.js` — **新規作成**、ドラッグロジック

## Verification

- ブラウザで `index.html` を開く
- フローティングカードをマウスでドラッグして自由に移動できることを確認
- カードが画面外に出ないことを確認
- カーソルが grab / grabbing に変わることを確認
