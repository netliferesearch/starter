# :green_heart: starter :green_heart:
Frontend starter and a static site generator for rapid prototyping.

## :fast_forward: tl;dr
```
download this repo
cd my-app/
npm i
npm run dev
```

When you see this you can open your browser at [localhost:3000](http://localhost:3000).

![Alt text](https://cloud.githubusercontent.com/assets/4348783/18286459/2f49addc-7473-11e6-9e47-9061ecba7116.gif?raw=true "Linting")

## :muscle: Tasks
* `npm i` - Install dependencies
* `npm run dev` - Local development
* `npm run build` - Building static files
* `npm start` - Heroku run this after deploy

# :question: Why we made this?
Being a group of creative frontenders and designers it is great to experiment and do new things in our own way. At the same time sharing ways of doing things is valuable. Making a *starter* kit can possibly help us move towards a slightly more streamlined way of doing things.

When we started the this project we looked at a lot of different setups within the group. And we did find a lot of smart things and tried to merge it to a common platform. This means it is probably not perfect, but hopefully it will address a few painpoints and make the setup process a bit easier. Modern frontend _is_ complex, but there is no need to _invent the wheel_ every time. :smile:

We believe in rapid prototyping and static site generators are _awesome_ for this. That´s why we included [Metalsmith](http://www.metalsmith.io/) in our default setup. You are working with templates and layouts separated from the content without needing a CMS :metal:. There is [a whole bunch of static site generators out there](https://staticgen.com), and we have tested a lot of them. We did chose Metalsmith because it's both "pluggable" and quite flexible.

# :package: It contains
* [Metalsmith](http://http://www.metalsmith.io/) static site generator
* Giving CSS superpowers with [SASS](http://sass-lang.com/)
* Some basic CSS styles and setup
* [Webpack](https://webpack.github.io/) for transpiling SASS and JavaScript
* [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html) for :fire: loading
* [Babel](https://babeljs.io/) for compiling ES6
* File structure with a SRC/DIST setup

## :neckbeard: Install Node
You have to install Node via NVM to get your setup and permissions right. If you aren´t convenient doing this your self, react out to a colleuge or ask in our *#frontend* Slack channel.

## :fork_and_knife: Linting
Both ESLint and SassLint is included in this starter. [Our setup for ESLint](https://github.com/netliferesearch/eslint-config-netliferesearch) is a fork of Airbnb which a lot of project seems to use these day. Linting may seems a bit irritating at first, but we will strongly recommend everyone to use it. It's good for experienced developers as well as rising stars. It gives you good and helpful advices and at the same time we ensure the quality of the code we are making.

![Alt text](https://cloud.githubusercontent.com/assets/4348783/18286458/2f4758e8-7473-11e6-9b36-4ae5bc450490.png?raw=true "Linting")

### Atom Packages for proper linting
* [Linter](https://atom.io/packages/linter)
* [SassLint](https://atom.io/packages/linter-sass-lint)
* [ESLint](https://atom.io/packages/linter-eslint)

## :smile: Commit Message Emoji´s
To make things a bit more fun feel free to include a emoji in your commits. It could actually by quite informative too. (Inspired by [Commit Message Emoji](https://github.com/dannyfritz/commit-message-emoji))

Commit Type | Emoji
----------  | -------------
Initial Commit | :tada: `:tada:`
Cosmetics | :art: `:art:`
New Feature | :sparkles: `:sparkles:`
Bugfix | :bug: `:bug:`
Deleting stuff | :x: `:x:`
Refactoring | :package: `:package:`
Documentation | :books: `:books:`
Performance | :racehorse: `:racehorse:`
Tooling | :wrench: `:wrench:`
Tests | :rotating_light: `:rotating_light:`
Deprecation | :poop: `:poop:`

[Emoji Cheat Sheet](http://www.webpagefx.com/tools/emoji-cheat-sheet/)
