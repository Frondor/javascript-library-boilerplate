# Javascript Library Boilerplate

[![Build Status](https://travis-ci.org/Frondor/javascript-library-boilerplate.svg?branch=master)](https://travis-ci.org/Frondor/javascript-library-boilerplate)
[![Greenkeeper badge](https://badges.greenkeeper.io/Frondor/javascript-library-boilerplate.svg)](https://greenkeeper.io/)

Webpack 4 based boilerplate to create libraries for the browser, Node, or BOTH!
Featuring Babel 7, Sass, Jest and development workspace with HMR.

## Getting started

1.  Download
2.  Decide if your build system needs CSS support (see below)
3.  Decide your project target: `web`, `node`, or `both` (see below)
4.  Run `npm install`
5.  Make it happen! :rocket:

### Do you need CSS and Sass support?

If the answer is **YES**, do nothing. This is enabled by default.
You can now start importing css/sass/scss files from your js modules ([see demo](src/index.js#L4)).

If the answer is **NO**, then _remove_ all `devDependencies` below `autoprefixer` (including) in `package.json`.
And that's it, hopefully you won't break anything :sweat_smile:

Now you are ready to run `npm install`.

### Build for the Web, Node, or both?

The system will create the js bundle(s) depending on the `browser` and `main` fields of the `package.json` file.

- Provide just `main` field to target **Node.js** only.
- Add the `browser` field pointing to the umd file in /dist (same as in main) to target the Web.
- Provide both `browser` and `main` fields, **but append `.node.js` to the filename used in the `main` field**, so the system knows it has to generate an extra bundle for Node.js envs.

The code behind this logic resides in [`build/webpack.prod.js`](build/webpack.prod.js#L43) (and it's awful but it works!)

We are targeting both by default:

```json
// package.json
{
  "main": "/dist/myLib.node.js",
  "browser": "/dist/myLib.js"
}
```

## Browser Workflow

For development, you can start a dev server with HMR by running `npm start`. It will automatically open a browser tab and serve [/dev/index.html](dev/index.html), just like a rustic playground for your library.

## NodeJS Workflow

No mysteries here, you can use your own IDE just as you do with other js modules. For instance, use [VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging).

## Testing

Jest is in charge of testing by default, read more about it [here](https://jestjs.io/docs/en/getting-started.html).

## FAQ

<details>
  <summary>Why <code>babel-core</code> and <code>@babel/core</code>?</summary>
  Because of <a href="https://jestjs.io/docs/en/getting-started#using-babel">babel-jest</a>
</details>
<details>
  <summary>How do I change the name of my lib?</summary>
  The artifact names are generated after the package name (name field in package.json), and coincides with the name used by the `var` version of the module.
  The system uses kind of a camelCase version of the name field, you can find it at <a href="build/webpack.common.js#L4">build/webpack.common.js</a>
</details>

## Contribute

Every suggestion is welcome! If you have some idea that may improve the usability and quality of this repo, go ahead, open an issue and let's work on it!

## Roadmap

- Implement ESLint
- `/config.js` file for centralized configs and move everything to a `/config` dir.
- Automatic generator?
- [Have any suggestion?](/Frondor/javascript-library-boilerplate/issues)
