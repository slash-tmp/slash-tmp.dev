---
title: Améliorer l'accessibilité de la navigation sur une application Nuxt
description:
published: false
tags:
  - a11y
  - javascript
  - nuxt
---

## Introduction

(Ce qu'on va apprendre ici, )

## Routage côté-client

(Expliquer le principe de la navigation côté-client)

## Routage accessible avec NuxtJS

(Bref explication des spécificité du routage avec Nuxt)

### Réinitialiser le focus

(Pourquoi il faut faire ça)

(Comment le faire avec un layout nuxt)

```html
<main id="main-content">
  <Nuxt />
</main>
```

```javascript
watch: {
  // reset page focus on route change
  $route(to, from) {
    if (from.path !== to.path) {
      // only reset focus on page change (not when going to an anchor on the same page)
      this.$el.focus()
    }
  }
}
```

### Annoncer le changement de page

(Pourquoi il faut faire ça)

(Comment le faire avec les pages nuxt)

(Refactor de la solution en mixin)

(Refactor de la solution en module/plugin/middleware nuxt)

## Conclusion
