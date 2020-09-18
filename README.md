# 微前端实践

## Main-service 主服务 

```sh
npm install
npm run start
```

### http://localhost:8080

## Service-react 子服务 react

```shell
npm install
npm run start
```

### http://localhost:8888

## Service-vue 子服务 vue

```shell
npm install
npm run start
```

### http://localhost:9000

## 子服务导出方法 vue子服务为例

```javascript
export const bootstrap = props => {
  return Promise.resolve()
}

export const mount = ({cb}) => {
  return new Promise(resolve => {
    if (typeof cb === 'function') {
      cb(router)
    }
    instance = new Vue({
      el: '#vue',
      router,
      render: h => h(App),
    });
    resolve()
  })
}

export const unmount = () => {
  return new Promise(resolve => {
    resolve()
  })
}
```



## 子服务webpack配置output方式为umd模式, 以下为示例

```javascript
output: { // 输出
    library: 'vue', // 模块名称 主服务调用 window.vue
    publicPath: 'http://localhost:9000/', // 设置绝对路径，解决静态文件404
    libraryTarget: 'umd',
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './dist')
  },
```

## dev-server配置支持跨域

```javascript
devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",  // 允许所有源访问
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
    },
    historyApiFallback: true, // h5 解决路由404， 线上部署nginx也要相应配置 
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
```

