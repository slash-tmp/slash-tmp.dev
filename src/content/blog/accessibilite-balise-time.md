---
title: 'Sémantique et accessibilité de la balise <time>'
description: "Anatomie et analyse de l'accessibilité de la balise <time> avec les différents lecteurs d'écran."
date: 2021-09-13
published: true
---

Il existe plus de 100 balises HTML (essayez le [HTML Tags Memory Test](https://codepen.io/plfstr/full/zYqQeRw) pour voir combien vous en connaissez). Chaque balise a ses spécificités et permet, dans la plupart des cas, d'attributer un sens au contenu qu'elle contient. C'est ce qu'on appelle la **sémantique**, obligatoire entre autres pour rendre un site accessible.

Quand on développe des sites, on a souvent dans le contenu des éléments temporels (date de publication d'une recette, durée de lecture d'un article de blog...). Il existe pour ce type de contenu la balise `<time>`.

## Anatomie de la balise `<time>`

La balise `<time>` attend un contenu temporel qui peut se présenter de 3 manières différentes :

- Une **heure** : "L'heure du goûter c'est **16h00**".
- Une **date** : "On fête la nouvelle année le **1er janvier**".
- Une **durée** : "Le Seigneur des anneaux : Le Retour du roi dure \*\*4 heures et 22 heures et 36 minutes

```html
<p>
  Le Seigneur des anneaux : Le Retour du roi dure
  <time datetime="PT4H23M">4 heures et 23 minutes</time>
</p>
```

La balise `<time>` est une élément inline qui apparaît sans style par défaut dans la plupart des navigateurs.

Elle est d'ailleurs supportée partout sauf sur Internet Explorer. Mais le HTML étant un langage qui [dégrade gracieusement](https://developer.mozilla.org/fr/docs/Glossary/Graceful_degradation), elle est rendue comme un texte générique lorsqu'elle n'est pas supportée.

## Un attribut, mais pour les machines

En plus des attributs globaux, l'élément `<time>` possède un attribut un peu particulier : `datetime`. Ce dernier est destiné aux machines qui vont l'interpréter plutôt qu'aux personnes. C'est à dire les navigateurs, les clients email, les lecteurs de flux RSS, les lecteurs d'écran...

Il attend par conséquent une valeur normée dont [les formats sont détaillés sur MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#valid_datetime_values). Ces [formats pour la balise `<time>` sont détaillés sur CSS-tricks](https://css-tricks.com/time-element/).

La valeur de cet attribut peut aussi servir à parser plus facilement en JavaScript des valeurs de date. Entre "2021-09-18" et "18 septembre 2021", le premier est plus facilement manipulable.

## Comment est-ce interprété par les lecteurs d'écran ?

C'était la plus grande question en écrivant cet article : est-ce que les lecteurs d'écran comprennent la balise `<time>` et est-ce qu'elle améliore l'expérience de navigation ?

Voici les résultats de vocalisations effectuées sur plusieurs combinaisons populaires de navigateurs et de lecteurs d'écran pour les contenus suivants :

- Date : 8 septembre 2021 (avec et sans attribut `datetime`).
- Date : 08/09/2021 (avec et sans attribut `datetime`).
- Durée : 3 minutes (avec et sans attribut `datetime`).

### Avec l'attribut `datetime`

<div class="table-wrapper">

| Lecteur d'écran + navigateur | 8 septembre 2021                         | 08/09/2021                                                 | 2 heures et 36 minutes                                      |
| ---------------------------- | ---------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------- |
| VoiceOver + Safari           | "8 septembre 2021, 8 septembre 2021"     | "08 barre oblique 09 barre oblique 2021, 8 septembre 2021" | "2 heures et 36 minutes, deux heures et trente-six minutes" |
| VoiceOver + Chrome           | "8 septembre 2021"                       | "08 barre oblique 09 barre oblique 2021"                   | "2 heures et 36 minutes"                                    |
| Talkback + Chrome            | "8 septembre 2021"                       | "8 9 2021"                                                 | "2 heures et 36 minutes"                                    |
| NVDA + Chrome                | "huit septembre deux-milles-vingt-et-un" | "huit septembre deux-milles-vingt-et-un"                   | "deux heures trente-six minutes"                            |
| NVDA + Firefox               | "huit septembre deux-milles-vingt-et-un" | "huit septembre deux-milles-vingt-et-un"                   | "deux heures trente-six minutes"                            |

</div>

### Sans l'attribut `datetime`

<div class="table-wrapper">

| Lecteur d'écran + navigateur | 8 septembre 2021                         | 08/09/2021                               | 2 heures et 36 minutes           |
| ---------------------------- | ---------------------------------------- | ---------------------------------------- | -------------------------------- |
| VoiceOver + Safari           | "8 septembre 2021"                       | "08 barre oblique 09 barre oblique 2021" | "2 heures et 36 minutes"         |
| VoiceOver + Chrome           | "8 septembre 2021"                       | "08 barre oblique 09 barre oblique 2021" | "2 heures et 36 minutes"         |
| Talkback + Chrome            | "8 septembre 2021"                       | "8 9 2021"                               | "2 heures et 36 minutes"         |
| NVDA + Chrome                | "huit septembre deux-milles-vingt-et-un" | "huit septembre deux-milles-vingt-et-un" | "deux heures trente-six minutes" |
| NVDA + Firefox               | "huit septembre deux-milles-vingt-et-un" | "huit septembre deux-milles-vingt-et-un" | "deux heures trente-six minutes" |

</div>

En résumé :

- Il n'existe a priori pas de rôle ARIA particulier pour ce type d'élément. Dans les 2 cas, il est perçu comme un texte standard.
- L'attribut `datetime` est seulement lu et interprété par la combinaison VoiceOver + Safari (pas la possibilité de tester sur iOS) mais cela provoque un doublon dans l'annonce.
- Certains lecteurs d'écran comprennent le format abrégé 08/09/2021 (ce n'est pas lié à la balise `<time>`) et le traduisent en toutes lettres sauf VoiceOver qui lit les séparateurs (/) littéralement.
- Dans le cas d'une heure (2 heures et 36 minutes), la valeur de l'attribut `datetime` est ignorée par NVDA : `<time datetime="PT2H12M">2h36m</time>` sera lu "deux heures trente-six minutes".

---

Hormis un doublon qui peut apparaître lors de la vocalisation avec VoiceOver (mais qui peut être bénéfique si la date affichée est abrégée), l'attribut `datetime` permet a priori uniquement d'apporter du contexte en pour les agents utilisateurs (navigateur, client email...).

La balise `<time>` est-elle donc intéressante ? Oui, même si sa valeur sémantique n'est pas aussi marquée que sur d'autres éléments comme les listes ou les tableaux, elle peut apporter un léger bonus de navigation.
