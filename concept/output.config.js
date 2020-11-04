const path = require('path');

module.exports = {
    entry:'./path/to/may/file.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'my-first-output.bundle.js'
    }
}


//多个入口起点时  应该使用占位符来确保每个文件具有唯一的名称

module.exports ={
    entry:{
        app:'./src/app.js',
        search:'./src/search.js'
    },
    output:{
      filename:'[name].js',   //写到硬盘：./dist/app.js ,./dist/search.js
      path:__dirname+'/dist'  
    },

    //以下是对资源使用cdn和hash的复杂示例：
    output:{
        path:'home/proj/[fullhash]',
        publicPath:'https://cdn.example.com/assets/[fullhash]/'
    }
}
