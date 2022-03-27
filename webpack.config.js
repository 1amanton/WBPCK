const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {

    context: path.resolve(__dirname, "src"),

    mode: "development",

    entry: {
        main: "./index.js",
        analytics: "./analytics.js"
    },
    
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },

    resolve: {
        extensions: [".js", ".json", ".png"],
        alias: {
            "@" : path.resolve(__dirname, "src"),
            "@styles" : path.resolve(__dirname, "src/styles"),
            "@models" : path.resolve(__dirname, "src/models"),
            "@assets" : path.resolve(__dirname, "src/assets")
        }
    },

    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },

    devServer: {
        port: 4200
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),

        new CleanWebpackPlugin(),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/favicon.ico"),
                    to: path.resolve(__dirname, "dist")
                }
            ]
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: ["file-loader"]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                use: ["file-loader"]
            }
        ]
    }
}