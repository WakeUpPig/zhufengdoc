## webpack
webpack是一款强大的模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理。

## 1. webpack初体验

### 1.1 初始化git
```javascript
$ mkdir webpack-demos && cd webpack-demos && git init
```

### 1.2 初始化项目
```bash
$ npm init -y
```


### 1.3 增加.gitignore
创建文件
```javascript
$ touch.gitignore
```

在文件中增加以下内容
```
node_modules 
.idea
```

### 1.4 在项目根目录下创建src和build目录
`src`目录存放源码，`build`目录存放编译打包之后的资源
```
$ mkdir src build
```

### 1.5 增加以下文件
#### 1.5.1 `src/component.js`
```javascript
$ cd src && touch component.js
```
```javascript
exports.name = 'zfpx';
```
#### 1.5.2 `src/index.js`
```javascript
$ cd src && touch index.js
```
```javascript
var comp = require('./component.js');
console.log(comp.name);
```
#### 1.5.3 `build/index.html`
```javascript
$ cd build && touch index.html
```
```javascript
<script src="bundle.js"></script>
```

#### 1.5.4 目录结构
![目录结构](/static/img/webpacks.jpg)

### 1.6 下载`webpack`和`webpack-dev-server`
```
$ npm install --save-dev webpack webpack-dev-server
```

### 1.7 创建webpack的配置文件
```javascript
$ touch webpack.config.js
```

配置`webpack.config.js`
```
var path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),//入口文件
    output: {
        path: path.resolve(__dirname, 'build'),//输出路径
        filename: 'bundle.js' //输出文件名
    },
};
```

### 1.8 修改 `package.json`
```diff
  "scripts": {
+    "build": "webpack"
  }
```

### 1.9 执行命令进行编译
```javascript
$ npm run build
```