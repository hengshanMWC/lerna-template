# init

```
git clone https://github.com/hengshanMWC/lerna-template.git
lerna bootstrap // npm i -g yarn && npm i -g lerna
yarn jest
```

# publish test

Build local NPM source

```
npm install -g verdaccio
verdaccio
```

Modify file

```
npm run per
git commit -m 'xxx'
lerna publish
```
