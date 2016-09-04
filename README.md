# :point_right: starter :unicorn_face:
Frontend starter and a static site generator for rapid prototyping.

## tl;dr
```
download this repo
cd my-app/
npm i
npm run dev
```

When you see this you can open your browser at [localhost:8080](http://localhost:8080).

![Alt text](/docs/start.gif?raw=true "Linting")

## Tasks
* `npm i` - Install dependencies
* `npm run dev` - Local development
* `npm run build` - Building static files
* `npm start` - Heroku run this after deploy

# Why we made this?
At Netlife Research we believe in rapid prototyping. Static site generators are _awesome_ for this. You are working with templates and layouts separated from the content without needing a CMS :metal:. There is [a whole bunch of static site generators out there](https://staticgen.com), and we have tested a lot of them. We did chose [Metalsmith](http://www.metalsmith.io/). Which is a "pluggable" and quite flexible tool, it´s not perfect but it does to the job quite nice most of the times.

## Install Node
You have to install Node via NVM to get your setup and permissions right. If you aren´t convenient doing this your self, react out to a colleuge or ask in our *#frontend* :slack: channel.

## Linting
Both ESLint and SassLint is included in this starter. [Our setup for ESLint](https://github.com/netliferesearch/eslint-config-netliferesearch) is a fork of Airbnb which a lot of project seems to use these day. Linting may seems a bit irritating at first, but we will strongly recommend everyone to use it. It´s both good for experienced developers and rising stars. It gives you good and helpful advices and at the same time we ensure the quality of the code we are making.

![Alt text](/docs/linting.png?raw=true "Linting")

### Atom Packages for proper linting
* [Linter](https://atom.io/packages/linter)
* [SassLint](https://atom.io/packages/linter-sass-lint)
* [ESLint](https://atom.io/packages/linter-eslint)

## Commit Message Emoji :unicorn_face:
To make things a bit more fun feel free to include a emoji in your commits. It could actually by quite informative too. (Inspired by [Commit Message Emoji](https://github.com/dannyfritz/commit-message-emoji))

Commit Type | Emoji
----------  | -------------
Initial Commit | :tada: `:tada:`
New Feature | :sparkles: `:sparkles:`
Bugfix | :bug: `:bug:`
Refactoring | :package: `:package:`
Documentation | :books: `:books:`
Performance | :racehorse: `:racehorse:`
Cosmetic | :lipstick: `:lipstick:`
Tooling | :wrench: `:wrench:`
Tests | :rotating_light: `:rotating_light:`
Deprecation | :poop: `:poop:`

[Emoji Cheat Sheet](http://www.webpagefx.com/tools/emoji-cheat-sheet/)
