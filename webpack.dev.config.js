var htmlWebpackPlugin = require('html-webpack-plugin'); // 引入htmlWebpackPlugin插件
var path = require('path');

module.exports = {
    entry: {
        pc: './src/pc.js', // PC版入口文件
        wap: './src/wap.js' // wap版入口文件
    },
    output: { // 打包文件存放路径和文件名
        path: __dirname + '/dist',
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, // 匹配js后缀的文件
                loader: 'babel-loader', // 处理ES6的loader
                exclude: path.resolve(__dirname, "node_modules"),
                include: path.resolve(__dirname, "src"),
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.tpl$/,
                loader: 'ejs-loader',
                options: {
                    attrs: ['img:src', 'img:data-original']
                }
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, "node_modules"), //排除node_modules，提高打包速度
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    browsers:['last 5 versions']
                                })
                            ]
                        }
                    }
                ]
            },
            {
                // 处理Jquery的匹配
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                },{
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        query: {
                            limit: 10000,
                            name: 'images/[name]-[hash:8].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader' 
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'pc.html', // 指定生成html的名称，默认index.html
            template: 'pc.html',
            inject:  'head', // 脚本加载的地方head | body
            title: '一个简单的Demo',
            keywords: '一个简单的Demo',
            description: '一个简单的Demo',
            chunks: ['pc'], //这里只调用chunk pc 的内容
            minify: {
                removeComments: true, //删除注释
                collapseWhitespace: true, //删除空格
            }
        }),
        new htmlWebpackPlugin({
            filename: 'wap.html', // 指定生成html的名称，默认index.html
            template: 'wap.html',
            inject:  'head', // 脚本加载的地方head | body
            title: '一个简单的Demo',
            keywords: '一个简单的Demo',
            description: '一个简单的Demo',
            chunks: ['wap'], //这里只调用chunk wap 的内容
            minify: {
                removeComments: true, //删除注释
                collapseWhitespace: true, //删除空格
            }
        })
    ]
}