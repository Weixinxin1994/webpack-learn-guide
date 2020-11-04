loader能让webpack能够去处理非JavaScript文件，webpack自身只能理解JavaScript，loader可以将所有类型的文件转换为webpack能够处理的有效模块
本质上，webpack loader将所有类型的文件，转换为应用程序的依赖图，和最终的bundle，可以直接引用的模块。
loader 可以使你在 import 或 "load(加载)" 模块时预处理文件
在webpack中配置loader的两个目标：
1.test属性，用于标识出应该被对应的loader进行转换的某些文件。
2.use属性，表示进行转换时，应该使用哪个loader


loader的特性
1.支持链式调用。链中的每个loader将会