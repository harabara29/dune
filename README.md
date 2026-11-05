# Dune Helper

A mobile companion for the Dune board game (advanced rules). Pick your faction, follow your own steps for each phase, track spice and see the conditions your opponents put on you.

Open: https://harabara29.github.io/dune/

Progress is saved only on your own phone. Card photos are read on the phone and never uploaded.

## Editing

- `index.html`: the app.
- `cards.js`: the Treachery cards. Descriptions are our own short restatements, not card text. Add a `passive` entry to link an effect to a faction, and a `check` note when a detail needs verifying against the physical card.

There is no build step. A push to `main` updates the site.
