"use strict";

//node-static - модуль для запуска статического сервера командой static & в данной директории

//webpack --display-modules -v - подробная инфа о модулях




//переменная окружения, нужна для переключения между девелопмент и продакшн режимами
//NODE_ENV - переменная окружения
let NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require("webpack");

let ExtractTextPlugin = require("extract-text-webpack-plugin");
let css = require("./dev/styles/main.less");

console.log(NODE_ENV);

//module.exports может экспорировать массив из набора разных модулей module.exports = [{},{}...]

//объект конфига
module.exports =

    {
        context: __dirname + '/dev/js/modules', //указываю абсолютный путь для entry, чтобы там каждый раз не писать

        /*Если тут еще подключу welcome - модуль, который requirят, то будет ошибка так как нельзя подключать зависимости в entry, чтобы обойти делаю в welcome require, от нового модуля, в котором будет логика welcome)*/
        entry: {
            home: "./home.js",
            about: "./about.js",//"./dev/about.js"
            //common: "./common",
            common: ["./common", "./welcome"]//если нужно в явном виде указать, что модуль welcome нужно включить в common, экспортируется только последний указанный модуль
        },
        output: {
            path: __dirname + '/public',//тут обязательно абсолютный путь
            filename: "[name].js",//name - значит возьми имя модуля на входе и дай его нового на выходе
            library:  "[name]" //exports модуля в глобальную переменную
        },

        watch: NODE_ENV == "development", //вотчер, смотрит за всеми файлами

        watchOptions: {
            aggregateTimeout: 100 //мс, которые вебпак ждет до того как запустить сборку
        },

        devtool: NODE_ENV == "development" ? "cheap-inline-module-source-map" : null, //для дебага, нужна мапа

        //подключается на разных стадиях компиляции и что-то делает
        //DefinePlugin - прокидывает переменные окружения на клиент
        plugins: [
            new webpack.NoErrorsPlugin(), //нужен для того, чтобы вебпак не создавал файлы при ошибке
            new webpack.DefinePlugin({
                NODE_ENV: JSON.stringify(NODE_ENV),
                LANG:     JSON.stringify("ru")
            }),
            //выношу в common.js общую часть всех точек входа
            new webpack.optimize.CommonsChunkPlugin({
                name: "common",
                //minChunks: 2 //минимальное количество точек входа из которых надо вынести общую часть
                //chunks: ['about', 'home'] //можно явно указать из каких модулей стоит вынести общую часть
            }),
            new ExtractTextPlugin("[name].css")
        ],

        //для модулей
        resolve: {
            modulesDirectories: ['node_modules'],
            extensions:         ['', '.js']
        },

        //для лоадеров
        resolveLoader: {
            modulesDirectories: ['node_modules'],
            moduleTemplates:    ['*-loader', '*'],
            extensions:         ['', '.js']
        },

        module: {
            //к файлам оканчивающимся на js применяем лоадер babel, те модуль npm i babel-loader.
            //Лоадер - это трансформатор, получает на вход код, отдает на выходе другой код, то же с соурс мапой
            loaders: [
                {
                    test: /\.js$/,
                    loader: "babel",
                    query: {
                        // https://github.com/babel/babel-loader#options
                        //нужно чтобы заработало)
                        cacheDirectory: true,
                        presets: ['es2015']
                    }
                }
            ]

        }
    };




//модуль для uglify
if (NODE_ENV == "production") {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings:     false,
                /*drop_console: true,
                unsafe:       true*/
            }
        })
    );
}