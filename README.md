# Javascript Library Boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/Frondor/javascript-library-boilerplate.svg)](https://greenkeeper.io/)


Webpack 4 based boilerplate to create libraries for the browser, Node, or BOTH!
Featuring Babel 7, SASS, Jest and development workspace with HMR.

## Getting started

 1. Download
 2. Decide if your build system needs CSS support (see below)
 3. Decide your project target: `web`, `node`, or `both` (see below)
 4. Run `npm install`
 5. Make it happen! :rocket:

### Do you need CSS and SASS support?

If the answer is **YES**, do nothing, it comes like that by default. You just need to do `import 'src/sass/your-styles-file'` in your js modules ([see demo](src/index.js#L4)).

If the answer is **NO**, then _remove_ all `devDependencies` below `autoprefixer` (including) in `package.json`.
And that's it

Now you are ready to run `npm install`.

### Build for the Web, Node, or both?

The system will create the js bundles depending on the `browser` and `main` fields of the `package.json` file.

<details>
  <summary><b>Web</b> build</summary>
  <p>:warning: Notice the lack of <code>*.node.js</code> suffix in <code>main</code>.</p>
<pre class="highlight highlight-source-js">
// package.json
{
  "main": "/dist/myLib.js",
  "browser": "/dist/myLib.js"
}
</pre>
</details>
<details>
  <summary><b>Node</b> build</summary>
  <p>:warning: If you don't specify the <code>browser</code> property, the system assumes you are targeting Node only.</p>
<pre class="highlight highlight-source-js">
// package.json
{
  "main": "/dist/myLib.js"
}
</pre>
</details>
<details>
  <summary><b>Web & Node</b> build (:warning: default)</summary>
  <p>If you need to create bundles for both, browser and node environments, set the <code>browser</code> property of <code>package.json</code>, and also append <code>.node.js</code> to the filename provided in the <code>main</code> property</p>
  <p>:warning:<b>If you omit the ".node.js" sufix in <code>main</code> while providing a <code>browser</code> option, then no bundle for Node is created.</b></p>
<pre class="highlight highlight-source-js">
// package.json
{
  "main": "/dist/myLib.node.js", // Note the *.node.js
  "browser": "/dist/myLib.js"
}
</pre>
</details>

The code behind this logic resides in [`webpack.prod.js`](webpack.prod.js)

## Browser Workflow

In development, you can start a dev server with HMR by running `npm start`

## NodeJS Workflow

No mysteries here, you can use your IDE just as you do with any other js module. For instance, with [VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)

## Testing

Jest is in charge of testing by default, read more about it [here](https://jestjs.io/docs/en/getting-started.html).

## FAQ
<details>
  <summary>Why <code>babel-core</code> and <code>@babel/core</code>?</summary>
  Because of <a href="https://jestjs.io/docs/en/getting-started#using-babel">babel-jest</a>
</details>

## Roadmap

 - `/config.js` file for centralized configs and move everything to a `/config` dir.
 - Linting (and code quality?)
 - CSS modules support
 - Typescript support
 - web components?
 - Automatic generator?
 - [Have any suggestion?](issues)