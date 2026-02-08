# Plan: button タグ周りの仕様を学ぶ実装練習

## Context

flex/grid レイアウトの基本を理解した次のステップとして、`<button>` タグの仕様・挙動・スタイリングを実際にコードを書いて学ぶ。既存の `index.html` / `style.css` に新しいセクションを追加する形で進める。

## 学べるポイント

`<button>` は見た目はシンプルだが、以下のように多くの仕様が絡む要素：

1. **ボックスモデル**: `<button>` は `inline-block` として振る舞う（inline でも block でもない第3のパターン）
2. **デフォルトスタイル**: ブラウザが独自のスタイル（border, padding, background, font）を適用する
3. **type 属性**: `submit`（デフォルト）/ `button` / `reset` の違い — form 内での挙動が変わる
4. **疑似クラス（pseudo-classes）**: `:hover`, `:active`, `:focus`, `:disabled` の状態変化
5. **`<button>` vs `<a>` vs `<input type="button">`**: セマンティクスの違い
6. **`disabled` 属性**: HTML 属性と `:disabled` 疑似クラスの関係

## Implementation

### Section 1: ボタンのデフォルト表示とボックスモデル

`<button>` がデフォルトで `inline-block` であることを確認する。

```html
<div class="p-8 border mb-4">
  <h3 class="mb-4">Button: デフォルトの表示</h3>
  <p class="mb-4">buttonはデフォルトで inline-block として振る舞う</p>
  <button>ボタン1</button>
  <button>ボタン2</button>
  <button>ボタン3</button>
</div>
```

**観察ポイント**: ボタンが横に並ぶ（inline 的）が、width/height/padding/margin が全方向に効く（block 的）。

### Section 2: type 属性と form の関係

```html
<div class="p-8 border mb-4">
  <h3 class="mb-4">Button: type属性とformの関係</h3>
  <form onsubmit="alert('フォームが送信されました'); return false;">
    <input class="mb-4" type="text" placeholder="テキストを入力">
    <div class="flex gap-4">
      <button type="submit">送信 (type=submit, デフォルト)</button>
      <button type="button">何もしない (type=button)</button>
      <button type="reset">リセット (type=reset)</button>
    </div>
  </form>
</div>
```

**観察ポイント**: `type="submit"` はフォームを送信する。`type="button"` は何もしない。`type="reset"` は入力をクリアする。`type` を省略すると `submit` がデフォルト。

### Section 3: 疑似クラスによる状態変化のスタイリング

```html
<div class="p-8 border mb-4">
  <h3 class="mb-4">Button: 状態変化 (pseudo-classes)</h3>
  <div class="flex gap-4">
    <button class="btn">:hover / :active / :focus</button>
    <button class="btn" disabled>:disabled</button>
  </div>
</div>
```

CSS で `.btn` に対して `:hover`, `:active`, `:focus`, `:disabled` のスタイルを定義する。

```css
.btn {
  padding: 8px 16px;
  border: 2px solid #333;
  border-radius: 8px;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

.btn:hover {
  background-color: #e0e0e0;
}

.btn:active {
  background-color: #ccc;
  transform: scale(0.97);
}

.btn:focus {
  outline: 2px solid dodgerblue;
  outline-offset: 2px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

**観察ポイント**: マウスを乗せる→クリックする→フォーカスする→disabled の各状態でスタイルが変わること。

### Section 4: `<button>` vs `<a>` の比較

```html
<div class="p-8 border mb-4">
  <h3 class="mb-4">Button vs Anchor: セマンティクスの違い</h3>
  <div class="flex gap-4">
    <button class="btn">button要素 (アクション用)</button>
    <a class="btn" href="https://www.google.com" target="_blank">a要素 (ナビゲーション用)</a>
  </div>
</div>
```

**観察ポイント**: 見た目は同じにできるが、`<button>` はアクション（クリックして何かする）、`<a>` はナビゲーション（別のページへ移動）というセマンティクスの違いがある。

## Files to modify

- **`index.html`** — 4つのセクションを追加
- **`style.css`** — `.btn` とその疑似クラスのスタイルを追加

## Verification

- ブラウザで `index.html` を開く
- Section 1: ボタンが横に並ぶことを確認（inline-block）
- Section 2: 各 type のボタンを押してフォームの挙動の違いを確認
- Section 3: hover / active / focus / disabled の状態変化を確認
- Section 4: button と a の見た目が同じでも挙動が違うことを確認
