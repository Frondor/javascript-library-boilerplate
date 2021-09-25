# Dependency stuff that need attention

## Result of clean install

```sh
$ npm ci
npm WARN deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated left-pad@1.3.0: use String.prototype.padStart()
npm WARN deprecated sane@4.1.0: some dependency vulnerabilities fixed, support for node < 10 dropped, and newer ECMAScript syntax/features added
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
```

## Visualize deprecated dependencies

```sh

```

## Result of outdated

```sh
$ npm outdated
Package                Current          Wanted  Latest  Location                     Depended by
autoprefixer           9.8.6           9.8.6  10.3.5  node_modules/autoprefixer  javascript-library-boilerplate
babel-core    7.0.0-bridge.0  7.0.0-bridge.0  6.26.3  node_modules/babel-core    javascript-library-boilerplate
babel-jest            24.9.0          24.9.0  27.2.1  node_modules/babel-jest    javascript-library-boilerplate
jest                  24.9.0          24.9.0  27.2.1  node_modules/jest          javascript-library-boilerplate
```
