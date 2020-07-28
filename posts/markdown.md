---
title: "Markdown styles"
date: "2020-01-31"
---

### Heading 3

All the styles yo. My favorite keyboard shortcut is <kbd>⌘ + Shift + Alt + 8</kbd>. Make sure to do `npm install` to lorem ipsum dolor.

It's very easy to make some words **bold** and other words _italic_ with Markdown. You can even [link to Google!](http://google.com)

![alt](https://images.ctfassets.net/2d5q1td6cyxq/5IVm8Alsyck2Mg4066WMCU/309b78be5fb79114ca0c84999b93265f/rst-pos01.png)

Sometimes you want numbered lists:

1. One
2. Two
3. Three

Sometimes you want bullet points:

* Start a line with a star
* Profit!

Alternatively,

- Dashes work just as well
- And if you have sub points, put two spaces before the dash or star:
  - Like this
  - And this

```
## Task List

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```

| Card Number           | Country        | Brand        |
| --------------------- | -------------- | ------------ |
| `4000 0012 4000 0000` | Canada         | Visa         |
| `4000 0020 8000 0001` | Denmark        | Visa         |
| `4000 0037 2000 0005` | Ireland        | Visa         |
| `4000 0075 2000 0008` | Sweden         | Visa         |
| `4000 0082 6000 0000` | United Kingdom | Visa         |
| `4000 0582 6000 0005` | United Kingdom | Visa (debit) |
| `3530 1113 3330 0000` | Japan          | JCB          |

## Quotes

> Coffee. The finest organic <kbd>Cmd + Alt + 5</kbd> suspension ever devised... I <mark>beat the Borg</mark> with it.<br />
> <p class="author">&mdash; Captain Janeway</p>

Here’s some emoji 🤛🏽👄💻🏔

## Task List

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

## Tables

| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |

## Code Highlighting

```jsx
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('keyup', e => {
    if (e.keyCode !== 13) return
    openAccordionTab(tabs[i])
  })
  tabs[i].addEventListener('click', e => {
    openAccordionTab(tabs[i])
  })
}
```

# Heading 1

All the styles yo

## Heading 2

All the styles yo

### Heading 3

All the styles yo

#### Heading 4

All the styles yo

##### Heading 5

All the styles yo

###### Heading 6

All the styles yo
