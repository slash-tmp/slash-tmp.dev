---
title: 'rgaa-scraper : une librairie open source pour le RGAA'
description: 'Pour pouvoir auditer des sites, il nous fallait une grille basée sur le RGAA. On en a profité pour créer un outil permettant de récupérer automatiquement la liste des thématiques, critères et tests.'
date: 2021-05-11
published: true
---

En bref : on a créé une librairie open source qui permet de récupérer et de filtrer les thématiques, critères et tests du RGAA (Référentiel Général d'Amélioration de l’Accessibilité). On en avait besoin pour un projet interne, on en a donc profité pour rendre l’outil public et disponible ici : [rgaa-scraper](https://github.com/slash-tmp/rgaa-scraper).

## Le besoin

[Comme on vient de se lancer](/blog/bonjour-monde), on a besoin d’outils pour travailler ! En l'occurrence, il nous fallait une grille d’audit de qualité et d’accessibilité web basée, entre autres, sur les critères et tests du RGAA. On a donc cherché un moyen de récupérer de manière automatique l’ensemble des données du RGAA (à savoir : les thématiques, les critères et les tests) pour la création de notre outil (on a d’ailleurs prévu d’écrire un article technique à ce sujet).

Il existe déjà [le dépôt GitHub de la Direction Interministérielle du Numérique (DINUM)](https://github.com/DISIC/RGAA) qui met à disposition les critères en JSON mais le dépôt n’est pas toujours à jour et on souhaitait avoir la possibilité de filtrer les résultats.

## Le résultat

Une librairie Node.js pour facilement récupérer les données du RGAA.

On a souhaité ajouter la possibilité de filtrer les résultats. Les résultats sont donc filtrables selon plusieurs éléments :

- Un identifiant de thématique : `"1"`.
- Un identifiant de critère : `"2.4"`
- Une recherche textuelle : `"images"`.
- Un niveau de conformité WCAG (Web Content Accessibility Guidelines, l’équivalent américain du RGAA) : `"AA"`.

Côté utilisation, la fonction `scrapeRgaa()` permet de scraper les données du site et de les retourner. Libre ensuite à l’utilisateur d’en faire ce qu’il souhaite. Voici un exemple où les données sont récupérées puis utilisées pour créer un fichier JSON.

```javascript
const fs = require('fs').promises
const { scrapeRgaa } = require('@slash-tmp/rgaa-scraper')

scrapeRgaa().then(async data => {
  const json = JSON.stringify(
    {
      topics: data.topics(),
      criteria: data.criteria(),
      tests: data.tests()
    },
    null,
    2
  )

  await fs.writeFile(__dirname, json, { encoding: 'utf-8' })
})
```

Pour plus de détails, un [projet d’exemple est disponible sur le dépôt](https://github.com/slash-tmp/rgaa-scraper/tree/main/examples).

---

C’est un projet qui est open source (notre tout premier 🎉) alors si vous le trouvez intéressant, n’hésitez pas à le partager et à le star sur GitHub (au passage, les contributions, quelles qu’elles soient, sont les bienvenues). Le code et la documentation sont disponibles sur GitHub : [rgaa-scraper](https://github.com/slash-tmp/rgaa-scraper).
