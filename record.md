# 何为 monorepo

monorepo 即是多包单仓库，和一包一仓库优劣对比如下

## 优势

- 更方便的调试：试想下，一个组件包依赖着动画包，当动画包迭代后，你是如何测试组件包是否受到影响，这时候，你可能会选择 npm link 方式去调试。而 monorepo 模式把这两个包内在

# 为何要使用 monorepo

# lerna 和 yarn

# 项目搭建

先全局安装 yarn 和 lerna

```
npm i -g yarn
npm i -g lerna
```

## 项目初始化

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

## 配置 lerna.json

先说下 lerna publish 和 lerna version，下面简称这两个命令为版本命令

- lerna publish: 更新版本并推送到 npm 上
- lerna version: 更新版本并推送到 git 上

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d7f05f3c9b84724a720605590299f71~tplv-k3u1fbpfcp-watermark.image?)

```
{
//
 - "packages": [
 -   "packages/*"
 - ],
 // 同步所有包的版本，修改包1后执行版本命令，更改版本为0.0.1，那么包2即使没改版本也是会跟着更新成0.0.1
 - "version": "0.0.0",
 // independent模式意味着各个包的版本是独立的，运行版本命令，会对每个修改过的包单独选择版本更新
 + "version": "independent",
 // 允许指定命令使用的client，默认是 npm，这里设置成 yarn
 + "npmClient": "yarn",
 //
 + "useWorkspaces": true,
 + "command": {
 +   "version": {
       // 可以指定那些目录或者文件的变更不会被publish
 +     "ignoreChanges": ["*.md", "**/*.test.ts", "**/*.spec.ts"],
       // 自定义提交信息
 +     "message": "chore(release): publish"
 +   },
 +   "publish": {
        // publish 使用的client
 +     "npmClient": "npm",
       // 设置git上 canary 分支才允许执行 lerna version 命令
 +     "allowBranch": [
 +       "canary"
 +    ]
 +   }
 + }
}

```

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

你会发现，packages 里面的包，会被安装到根目录的 node_modules 里面，这样就解决了包互相引用的问题
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9008e852a59e406a80536670f2d29929~tplv-k3u1fbpfcp-watermark.image?)

这边让项目内的包互相引用下

```
// @test/b和@test/c添加@test/a依赖
lerna add @test/a --scope=@test/{b,c}
// c和b互相依赖
lerna add @test/c --scope=@test/b
lerna add @test/b --scope=@test/c
```

其实就跟平常安装依赖一样，而且因为依赖都提升到根目录上面。

因为 yarn workspaces 模式可以将多个包的  `node_modules`  整合成一个， 只需要执行  `yarn install`  就可将所有包的依赖安装。包安装依赖后，并不会出现 node_modules，当然，这不

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0dda97eb27d9491d91dc2cd74a270e76~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f9883c0bdbc947a6a6d849d29eccdcd2~tplv-k3u1fbpfcp-watermark.image?)

## 删除依赖

还有当你使用 lerna version 的时候，他会提示你 a，b，c 循环引用问题，让你去解决，这时候你可以运行以下命令即可

```
// @test/b删除掉@test/c依赖
lerna exec --scope=@test/b yarn remove @test/c
```

# 参考

[Lerna 中文教程详解](https://juejin.cn/post/6844903856153821198#comment)

[lerna 的基础使用](https://www.jianshu.com/p/8b7e6025354b)

[lerna 和 yarn 实现 monorepo](https://juejin.cn/post/6855129007185362952#comment)

[阿里 monorepo](https://www.zhihu.com/question/318476028/answer/1895685159)
