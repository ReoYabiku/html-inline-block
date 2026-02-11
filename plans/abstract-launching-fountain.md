# overflow をコンテンツボックスでクリップする

## Context
`details`要素の親コンテナ（line 95）に`overflow: hidden`が設定されているが、`overflow: hidden`はpadding boxの端でクリップするため、paddingの領域にはみ出したテキストが見えてしまう。padding領域に差し掛かったらテキストを非表示にしたい。

## Approach
`overflow: hidden` → `overflow: clip` + `overflow-clip-margin: content-box` に変更する。

`overflow-clip-margin` は `overflow: clip` でのみ動作する（`overflow: hidden` では無効）。

### Changes

1. **style.css**: `.overflow-hidden`クラスを変更、または新しいユーティリティクラスを作成
   - `.overflow-hidden` の内容を以下に変更:
     ```css
     .overflow-hidden {
       overflow: clip;
       overflow-clip-margin: content-box;
     }
     ```
   - ※ `.overflow-hidden`が他の箇所でも使われている場合は、新クラス（例: `.overflow-clip-content`）を作る方が安全だが、現在このクラスは1箇所のみで使用されているため、直接変更で問題なし

2. **index.html**: 変更なし（既存の`overflow-hidden`クラスがそのまま使える）

## Verification
- ブラウザでページを開き、「アニメーション」タブの4番目のカードで`details`を開く
- テキストがpaddingの領域に入る前にクリップされることを確認する
