# Installation

Please read through our [Contributing Guidelines](CONTRIBUTING.md).

## General setup

- Install [Node.js](https://nodejs.org)
- Install [Yarn](https://yarnpkg.com)
  - OR Install [npm](https://www.npmjs.com)

### Installation

```
$ yarn
```

### Local Development

#### First way

```
$ yarn start
```

OR

```
npm run start
```

This command starts a local development server and opens up a browser window (http://localhost:3000). Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

OR

```
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve

```
npm run serve
```

### Deployment

#### Publishes the website to GitHub pages

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

Using SSH:

```
yarn deploy
```

OR

```
npm deploy
```

## Additional information

- [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)
