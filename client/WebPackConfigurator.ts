const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

export class WebPackConfigurator {

    public static getConfiguration() {
        return {
            devtool: "source-map",
            entry: {
                'polyfills': './out/client/app/polyfills.js',
                'vendor': './out/client/app/vendor.js',
                'app': './out/client/app/main.js'
            },
            output: {
                filename: './out/client/dist/bundle.[name].js'
            },
            plugins: this._getPlugins(),
            module: {
                rules: [
                    {
                        test: /\.html$/,
                        use: [{
                            loader: 'html-loader'
                        }],
                    }
                ]
            }
        };
    }

    private static _getPlugins() {
        let plugins = [
            new FileManagerPlugin({
                onStart: {
                    copy: [
                        // { source: './client/static', destination: './out/client/static' },
                        { source: './client/index.html', destination: './out/client/index.html' },
                        { source: './client/favicon.ico', destination: './out/client/favicon.ico' }
                    ]
                }
            }),

            new webpack.optimize.CommonsChunkPlugin({
                name: ['app', 'vendor', 'polyfills']
            }),

            new HtmlWebpackPlugin({
                filename: './out/client/index.html',
                template: './out/client/index.html',
                inject: true
            }),

            new webpack.ContextReplacementPlugin(
                // The (\\|\/) piece accounts for path separators in *nix and Windows
                /angular(\\|\/)core(\\|\/)@angular/,
                './out/client/dist', // location of your src
                {} // a map of your routes
            )
        ];

        if (process.env.NODE_ENV !== 'production') {
            return plugins;
        }

        let productionPlugins = [
            new UglifyJsPlugin({
                uglifyOptions: {
                    ie8: false,
                    mangle: true,
                    output: {
                        comments: false,
                        beautify: false
                    },
                    compress: {
                        warnings: false, // Suppress uglification warnings
                        pure_getters: true,
                        unsafe: true,
                        unsafe_comps: true
                    },
                    warnings: false
                }
            }),

            new CompressionPlugin({
                asset: "[path].gz[query]",
                algorithm: "gzip",
                test: /\.js$|\.css$/,
                deleteOriginalAssets: true
            })
        ];

        return plugins.concat(productionPlugins);
    }
}
