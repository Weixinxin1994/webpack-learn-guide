1.npx webpack 会将我们的脚本作为入口起点，然后输出为dist下的main.js

2.npx aaa\bbb\webpack --config webpack.config.js 当在windows中通过路径去调用webpack时，必须使用饭斜线，如果webpack.config.js存在，则webpack命令
  默认选中它，不存在也可通过--config设置文件名。

3.可在package内配置快捷命令 "build":"webpack",使用npm run build来代替npx webpack

4
  

