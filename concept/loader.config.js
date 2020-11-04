const path = require('path')
import Styles from 'style-loader!css-loader?modules!./styles.css'
module.exports={
    output:{
        filename:'my-first-loader.bundle.js'
    },
    module:{
        rules:[
            //你可以使用 loader 告诉 webpack 加载 CSS 文件，或者将 TypeScript 转为 JavaScript。为此，首先安装相对应的 loader：
            //loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！
            {test:/\\.ts$/,use:'ts-loader'},
            {test:/\\.css$/,use:'css-loader'}

            //使用loader 1。配置方式：在webpack.config.js文件中指定loader。
                        //2.内联方式：在每个import语句中显示指定loader
                        
                        //3.cli方式：在shell命令中指定它们。
        ]
    }
}