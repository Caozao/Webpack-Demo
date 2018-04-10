# 一个非常简单webpack项目...
  
## 基本信息
  
> webpack 4.4.1  
> nodejs v9.10.1  
> npm 5.6.0  

## 一、需要安装webpack  

### 1.1 全局安装webpack和cli  

> npm install webpack -g  
> npm i -g webpack-cli -D --save  

### 1.2 到指定目录安装webpack  

> 在D盘下新建一个webpack_dir的目录，然后cd webpack_dir  
> // 初始化npm  
> npm init -y  
> // 目录里安装webpack  
> npm install webpack --save-dev  
> // 目录里安装webpack-cli  
> npm i webpack-cli -D --save  
  
## 二 安装必要的loader和npm模块  

> npm install css-loader --save-dev // 处理CSS    
> npm install style-loader --save-dev // 处理CSS  
> npm i less-loader --save-dev  // 处理less  
> npm install less --save-dev  // 安装less  
> npm install file-loader --save-dev // 处理图片  
> npm install html-loader --save-dev // 处理html目标  
> npm install ejs-loader --save-dev //处理ejs|tpl模板loader  
> npm install postcss-loader --save-dev // css文件后处理loader  
> npm install autoprefixer --save-dev // css文件后处理loader的autoprefixer插件-自动增加浏览器前缀  
> npm install babel-loader --save-dev // 处理ES6的loader  
> npm install babel-preset-env --save-dev  
> npm install jquery --save  
> npm install bootstrap --save  

## 三、目录说明：  

> dist 用来存放打包后的文件  
> src 用了存放项目源文件  
> lib 文件用了存放第三方插件。例如Jquery的相关插件  

## 四、运行项目  
  
> cd your_project  
> npm install  
> npm run build  
  

