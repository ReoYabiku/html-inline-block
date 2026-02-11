# Fix: btn-animation-text が text-moji を表示しない問題

## Context
「アニメーション」タブ内の「表示切り替え」ボタン（`#btn-animation-text`）をクリックしても、`#text-moji` の文字が表示されない。

## Root Cause
`script.js` の3つ目のIIFE（即時実行関数式）が実行されていない。末尾が `})` で終わっており、`})()` になっていないため、イベントリスナーが登録されない。

## Changes

### File: `script.js`

1. **Line 72**: `})` → `})();` に修正（IIFEを実際に実行させる）
2. **Line 70**: `classList.add('show')` → `classList.toggle('show')` に修正（表示/非表示の切り替えを可能にする）

## Verification
1. ブラウザで `index.html` を開く
2. 「アニメーション」タブを選択
3. 「表示切り替え」ボタンをクリック → 「文字」が表示される
4. もう一度クリック → 「文字」が非表示になる
