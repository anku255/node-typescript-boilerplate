[![TypeScript version][ts-badge]][typescript-37]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][LICENSE]
[![Build Status][travis-badge]][travis-ci]


# fastify-graphql-typescript-boilterplate

Minimalistic boilerplate to quick-start Node.js development in TypeScript with Fastify and GraphQL.

What's included:

+ [TypeScript][typescript] [3.7][typescript-37],
+ [ESLint][eslint] with some initial rules recommendation,
+ [GrapqhQL][graphql] with grapqhl-compose-mongoose,
+ [Fastify][fastify] with initial routing setup,
+ [Jest][jest] unit testing and code coverage,
+ Type definitions for Node.js and Jest,
+ [Prettier][prettier] to enforce a consistent code style,
+ [NPM scripts for common operations](#available-scripts),
+ a simple example of TypeScript code and unit test,
+ .editorconfig for consistent file format.

## Quick start

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

To start, just click the **[Use template][repo-template-action]** link (or the green button),

or clone the repository with following commands:

```sh
git clone https://github.com/anku255/fastify-graphql-ts-boilterplate
cd fastify-graphql-ts-boilterplate
yarn install
```


Now start adding your code in the `src` and unit tests in the `__tests__` directories. Have fun and build amazing things 🚀

### Unit tests in JavaScript

Writing unit tests in TypeScript can sometimes be troublesome and confusing. Especially when mocking dependencies and using spies.

This is **optional**, but if you want to learn how to write JavaScript tests for TypeScript modules, read the [corresponding wiki page][wiki-js-tests].

## Available scripts

+ `clean` - remove coverage data, Jest cache and transpiled files,
+ `build` - transpile TypeScript to ES6,
+ `build:watch` - interactive watch mode to automatically transpile source files,
+ `start:qa` - interactive watch mode using nodemon to automatically transpile source files,
+ `lint` - lint source files and tests,
+ `test` - run tests,
+ `test:watch` - interactive watch mode to automatically re-run tests

## Environment Variables

Create an `.env` file in the root directory and add the environmental variables there.

```
PORT=8000
DATABASE=
JWT_SECRET=myjwtsecret
JWT_EXPIRATION=30d
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_FOLDER=
FB_APP_ID=
FB_APP_SECRET=
GQL_SERVICE_ENDPOINT=
FE_SERVICE_ENDPOINT=
```

## License
Licensed under the APLv2. See the [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/master/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-3.7-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2012.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v12.x/docs/api/
[travis-badge]: https://travis-ci.org/jsynowiec/node-typescript-boilerplate.svg?branch=master
[travis-ci]: https://travis-ci.org/jsynowiec/node-typescript-boilerplate
[typescript]: https://www.typescriptlang.org/
[graphql]: https://graphql.org/
[fastify]: https://www.fastify.io/
[typescript-37]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/master/LICENSE

[sponsor-badge]: https://img.shields.io/badge/♥-Sponsor-46b798.svg
[sponsor]: https://github.com/sponsors/jsynowiec

[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[wiki-js-tests]: https://github.com/jsynowiec/node-typescript-boilerplate/wiki/Unit-tests-in-plain-JavaScript
[prettier]: https://prettier.io

[repo-template-action]: https://github.com/jsynowiec/node-typescript-boilerplate/generate
