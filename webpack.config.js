const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

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
        extensions: [".js", ".json", ".png"]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),

        new CleanWebpackPlugin()
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