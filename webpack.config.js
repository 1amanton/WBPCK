const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")

const isDev = process.env.NODE_ENV === "development"
const isProd = !isDev
console.log("IS DEV:", isDev)

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }
    if(isProd) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const babelOptions = preset => {
    const options = {
        presets: ["@babel/preset-env"],
        plugins: ["@babel/plugin-proposal-class-properties"]
    }

    if(preset) {
        options.presets.push(preset)
    }

    return options
}

module.exports = {

    context: path.resolve(__dirname, "src"),

    mode: "development",

    entry: {
        main: ["@babel/polyfill", "./index.jsx"],
        analytics: "./analytics.ts"
    },

    output: {
        filename: filename("js"),
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

    optimization: optimization(),

    devServer: {
        port: 4200,
        hot: isDev
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: isProd
            }
        }),

        new CleanWebpackPlugin(),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/favicon.ico"),
                    to: path.resolve(__dirname, "dist")
                }
            ]
        }),

        new MiniCssExtractPlugin({
            filename: filename("css")
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },{
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: ["file-loader"]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                use: ["file-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions()
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions("@babel/preset-typescript")
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions("@babel/preset-react")
                }
            }
        ]
    }
}