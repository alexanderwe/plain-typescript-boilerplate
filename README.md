# plain-typescript-boilerplate

[![devDependencies Status](https://david-dm.org/alexanderwe/plain-typescript-boilerplate/dev-status.svg)](https://david-dm.org/alexanderwe/plain-typescript-boilerplate?type=dev)


This is just a opinionated personal boilerplate for my Typescript projects. Feel free to use it for your own projects, modify it or open an issue if you feel like there is something wrong.


## Included Features

* Package management via `yarn`, but you can opt out and start using `npm` if you wish
* Consistent coding styles accross editors via `.editorconfig`
* Linting via `tslint` with `airbnb's` style guide
* Small optional `.prettierrc` config if you are using prettier
* Compilation to `es5` module with `d.ts` files
* Start your application locally with `ts-node`
* Tests via `jest`
* Continous integration template for use with `travis`
* Documentation via `typedoc` into `/docs` folder, ready to be published to `GitHub pages`

## Getting started 

```
git clone https://github.com/alexanderwe/plain-typescript-boilerplate
cd plain-typescript-boilerplate
yarn install
```

## Scripts

* `style` - use Prettier to style all your source files
* `start` - runs your `src/index.ts` file with `ts-node`
* `build` - builds your Typescript project
* `watch` - uses the `watch` mode of tsc to constantly build your project on `src/*ts` changes
* `test` - runs your tests via `jest` and creates a coverage report 
* `doc` - creates documentation of your code