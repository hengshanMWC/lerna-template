# 开始前准备

```
npm i -g yarn
npm i -g lerna
```

# 初始化

```
mkdir lerna-template && cd lerna-template
lerna init // 初始化lerna.json和packages目录
```

目录如下

```
lerna-template/
  packages/
  package.json
  lerna.json
```

- 配置 lerna.json
- 发包的话要配置 package.json，添加 license 许可证

## 新增包

```
// 新增3个包
lerna create @test/a
lerna create @test/b
lerna create @test/c
```

packages 添加 3 个基础的包

```
lerna-template/
  packages/
    a/
    b/
    c/
  package.json
  lerna.json
```

## 安装依赖

```
lerna bootstrap
```

你会发现，packages 里面的包，会被安装到根目录的 node_modules 里面
