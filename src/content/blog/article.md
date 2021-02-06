---
title: Premier article test
description: Premier article et style guide
date: 2021-02-02
---

## Titres
## De niveau 2

### De niveau 3


## Paragraphes

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum temporibus cum fugit minus **texte en gras** exercitationem quam explicabo molestiae, eligendi neque quibusdam ad mollitia tempora libero vel recusandae hic!

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum temporibus *texte en italique* minus eaque optio ~text barré~ quam explicabo molestiae, eligendi neque quibusdam ad mollitia tempora libero vel recusandae hic!

Lorem ipsum dolor sit, amet [lien hypertexte](#) elit. Nostrum temporibus cum fugit minus eaque optio reiciendis exercitationem quam explicabo molestiae, `code inliné` quibusdam ad mollitia tempora libero vel recusandae hic!

## Notes de pied de page

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum temporibus cum[^1] fugit minus texte en gras exercitationem quam explicabo molestiae, eligendi neque quibusdam ad mollitia tempora libero vel recusandae hic!

## Horizontal line

---

## Listes

### Unordered lists

- Lorem ipsum dolor sit
- Lorem ipsum dolor sit
- Lorem ipsum dolor sit
    - Lorem ipsum dolor sit
    - Lorem ipsum dolor sit
    - Lorem ipsum dolor sit

### Unordered list with nested ordered list

- Lorem ipsum dolor sit
- Lorem ipsum dolor sit
- Lorem ipsum dolor sit
    1. Lorem ipsum dolor sit
    2. Lorem ipsum dolor sit
    3. Lorem ipsum dolor sit

### Ordered list with nested unordered list

1. Lorem ipsum dolor sit
2. Lorem ipsum dolor sit
3. Lorem ipsum dolor sit
    - Lorem ipsum dolor sit
    - Lorem ipsum dolor sit
    - Lorem ipsum dolor sit
4. Lorem ipsum dolor sit

### Ordered lists

1. Lorem ipsum dolor sit
2. Lorem ipsum dolor sit
    1. Lorem ipsum dolor sit
    2. Lorem ipsum dolor sit
    3. Lorem ipsum dolor sit
3. Lorem ipsum dolor sit
4. Lorem ipsum dolor sit



## Medias

> Citation inspirante : lorem ipsum dolor sit eligendi neque quibusdam ad mollitia tempora libero vel recusandae hic!

```js
// Bloc de code
export default {
  name: 'SiteFooter',
  data() {
    return {
      time: new Date().getHours()
    }
  },
  computed: {
    isNight() {
      return this.time > 22 || this.time < 7
    }
  }
}
```

[^1]: This is the first footnote.