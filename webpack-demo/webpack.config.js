const path = require('path');

module.exports = {
    entry:{
        app:'./src/index.js',
        vendors:'./src/vendors.js'
    },
    output:{
        filename: "bundle_[name].js",
        path:path.resolve(__dirname,'dist')
        //这里的filename: "bundle_[name].js" 中的[name]是一个 正则表达式匹配的，这里的[name]名字指的是键值对的键，
        //上面的实例中第一个入口文件是app: ['./src/index.js']，[name]名字对应的是app而不是index
        //。运行一下webapck命令就会在dist生成bundle_app.js和bundle_login.js两个文件
    }
}

