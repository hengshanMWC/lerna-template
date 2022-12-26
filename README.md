# introduce

lerna + pnpm = Monorepo，Support the following functions :package:

- [x] vite :package:
- [x] vitest :sheep:
- [x] typescript :alien:
- [x] husky :ghost:
- [x] eslint :flashlight:

# init

```
git clone https://github.com/hengshanMWC/lerna-template.git
lerna bootstrap // npm i -g yarn && npm i -g lerna
pnpm jest
```

# publish test

next, simulate the publish process

## build local NPM source

```
npm install -g verdaccio
verdaccio
```

Of course, if you want to use it formally, please modify it `.npmrc`

If you want some of the packages to specify NPM source, you can modify the package Publishconfig. JSON registry

## modify file

1. npm run per
2. git commit -am 'xxx'
3. lerna publish
   ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5496d2d8d3ba4aba99e92d74667809ed~tplv-k3u1fbpfcp-watermark.image?)
