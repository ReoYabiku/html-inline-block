# Fix: details要素の展開時に親要素からはみ出す問題

## Context

Tab3（アニメーション）の `<details>` 要素をクリックすると、コンテンツが展開されて親divの高さを超える。親divが `items-center`（align-items: center）を使っているため、コンテンツが増えるとflexboxが再計算され、summary の位置が上にずれてしまう。

**Goal**: summaryの位置を固定したまま、コンテンツが下方向にのみ親要素をはみ出すようにする。

## Approach

`details::details-content` に `position: absolute` を追加して、コンテンツを通常フローから外す。これにより：
- details要素のサイズが変わらない → flexboxの再計算が起きない → summaryの位置が固定される
- コンテンツは視覚的に下方向へ展開される
- `height: 0 → auto` のアニメーションはそのまま動作する

## Changes

### `style.css`

1. **`details` に `position: relative` を追加**（absolute positioning の基準にする）

2. **`details::details-content` に以下を追加：**
   - `position: absolute` — フローから外して、summaryの位置に影響しないようにする
   - `left: 0; width: 100%` — details要素と同じ幅で表示
   - `z-index: 10` — 他の要素の上に表示
   - `background-color: white; border: 1px solid black; border-radius: 4px; padding: 16px;` — コンテンツの可読性を確保

## Modified Files

- `style.css` (lines 13-24): `details` and `details::details-content` rules

## Verification

1. ブラウザで index.html を開く
2. Tab3（アニメーション）を選択
3. 「詳細を表示する」をクリック
4. 確認ポイント：
   - summaryの位置が動かないこと
   - コンテンツが下方向に表示されること
   - 展開アニメーションが正常に動作すること（height: 0 → auto）
   - 閉じた時もアニメーションが正常に動作すること
