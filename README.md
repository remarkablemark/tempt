# tempt

[![NPM](https://nodei.co/npm/tempt.svg)](https://nodei.co/npm/tempt/)

[![NPM version](https://img.shields.io/npm/v/tempt.svg)](https://www.npmjs.com/package/tempt)
[![Build Status](https://travis-ci.org/remarkablemark/tempt.svg?branch=master)](https://travis-ci.org/remarkablemark/tempt)
[![Coverage Status](https://coveralls.io/repos/github/remarkablemark/tempt/badge.svg?branch=master)](https://coveralls.io/github/remarkablemark/tempt?branch=master)

Simplified templating inspired by [Mustache](http://mustache.github.io):

```
tempt(template, data);
```

**Note**: Only the [variable tag type](http://mustache.github.io/mustache.5.html#TAG-TYPES) is supported. For templating with greater features, check out:
- [mustache](https://github.com/janl/mustache.js)
- [handlebars](https://github.com/wycats/handlebars.js/)

## Installation

[NPM](https://www.npmjs.com/package/tempt):

```sh
$ npm install tempt --save
```

[Yarn](https://yarn.fyi/tempt):

```sh
$ yarn add tempt
```

## Usage

Import the module:

```js
var tempt = require('tempt');
```

Render template with data object:

```js
tempt('Hello, {{name}}!', { name: 'world' });
// => 'Hello, world!'
```

Render template with data array:

```js
tempt('Hello, {{0}}!', ['world']);
// => 'Hello, world!'
```

## Testing

```sh
$ npm test
$ npm run lint:fix
```

## Release

```sh
$ npm run release
$ git push --follow-tags
```

## License

[MIT](https://github.com/remarkablemark/tempt/blob/master/LICENSE)
