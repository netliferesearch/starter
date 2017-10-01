# :green_heart: starter :green_heart:
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Frontend starter and a static site generator for rapid prototyping.

## :fast_forward: tl;dr

```
download this repo
cd my-app/
npm i
npm run dev
```

When you see this you can open your browser at [localhost:3000](http://localhost:3000).

![Alt text](https://cloud.githubusercontent.com/assets/4348783/18286459/2f49addc-7473-11e6-9e47-9061ecba7116.gif?raw=true "Start")

## :muscle: Tasks

* `npm i` - Install dependencies
* `npm run dev` - Local development
* `npm run build` - Building static files
* `npm start` - Heroku run this after deploy

# :question: Why we made this?

We are a group of creative frontenders and designers who likes to experiment and do new things our own way. At the same time sharing ways of doing things is valuable. Making a *starter* kit generates lots of valuable discussions, and can possibly help us move towards a slightly more streamlined way of doing things. Because consistency is also good.

When we started the this project we looked at a lot of different setups within the group. And we did find a lot of smart things and tried to merge it to a common platform. This means it is probably not perfect, but hopefully it will address a few pain points and make the setup process a bit easier. Modern frontend _is_ complex, but there is no need to _invent the wheel_ every time. :smile:

Static site generators are _awesome_ for rapid prototyping. That's why we included [Metalsmith](http://www.metalsmith.io/) in our default setup. This allows for the content to be separated from templates and layouts without the need for a CMS :metal:. There is [a whole bunch of static site generators out there](https://staticgen.com), and we have tested a lot of them. We chose Metalsmith because it's both "pluggable" and quite flexible.

# :package: *starter* contains

* [Metalsmith](http://http://www.metalsmith.io/) static site generator
* Giving CSS superpowers with [Sass](http://sass-lang.com/)
* Some basic CSS styles and setup
* [Webpack](https://webpack.github.io/) for transpiling Sass and JavaScript
* [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html) for :fire: loading
* [Babel](https://babeljs.io/) for transpiling ES6
* File structure with a `src`/`dist` setup
* Pre-configured to be deployed on Heroku

## :neckbeard: Prerequisites: Node

At [Netlife Research](http://netliferesearch.com) we install Node via [NVM](https://github.com/creationix/nvm) because we're not insane. NVM makes it easy to switch between different versions of Node. Copy paste this line into your command line (e.g. Terminal.app)

  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash

Restart your command line and comfirm that node runs via nvm by typing `which node` into the command line. If it returns `/Users/[you]/.nvm/versions/node/something` you're good to go. If it's not, ask for help in our #frontend Slack channel.

## :fork_and_knife: Linting
Both ESLint and SassLint is included in this starter. [Our setup for ESLint](https://github.com/netliferesearch/eslint-config-netliferesearch) is a fork of AirBnB's code standard, adopted by a lot of frontend projects. Linting may feel a bit irritating at first, but we'll strongly recommend everyone to use it. It's good for experienced developers as well as rising stars. It gives you good and helpful advice and at the same time we ensure the code quality.

![Alt text](https://cloud.githubusercontent.com/assets/4348783/18286458/2f4758e8-7473-11e6-9b36-4ae5bc450490.png?raw=true "Linting")

### Atom Packages for proper linting
* [Linter](https://atom.io/packages/linter)
* [SassLint](https://atom.io/packages/linter-sass-lint)
* [ESLint](https://atom.io/packages/linter-eslint)

## :computer: Heroku
This starter contains both a server and build tasks for Heroku. Remember to change the password in `server.js`. Default password is: ```netlife / research```.

For easy initial deploy to Heroku, use this button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Choose a name for the new dyno and region **Europe** (if you indeed are in Europe). After the app is deployed go to **Manage app** and the **Deploy** tab to connect your Github repository. Deploy new versions manually or enable automatic deploys.

<img src="https://cloud.githubusercontent.com/assets/4348783/18344038/08d3e106-75b6-11e6-915b-989f8b38f4ea.png" width="420" align="top"><img src="https://cloud.githubusercontent.com/assets/4348783/18344037/08d2d996-75b6-11e6-9d69-450159e7d6fb.png" width="420" align="top">

## :smile: Commit Message Emojis
To make things a bit more fun feel free to include a emoji in your commits. It could actually by quite informative too because it makes commit messages easier to browse. (Inspired by [Commit Message Emoji](https://github.com/dannyfritz/commit-message-emoji))

Commit Type | Emoji
----------  | -------------
Initial Commit | :tada: `:tada:`
Cosmetics | :art: `:art:`
New Feature | :sparkles: `:sparkles:`
Bugfix | :bug: `:bug:`
Deleting stuff | :x: `:x:`
Refactoring | :package: `:package:`
Cleaning | :shower: `:shower:`
Experimental | :crystal_ball: `:crystal_ball:`
Documentation | :books: `:books:`
Performance | :racehorse: `:racehorse:`
Tooling | :wrench: `:wrench:`
Tests | :rotating_light: `:rotating_light:`
Deprecation | :poop: `:poop:`

[Emoji Cheat Sheet](http://www.webpagefx.com/tools/emoji-cheat-sheet/)
# sonanskarriere
