const webpack = require('webpack')
const path = require('path')
const miniCss = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: isProd ? 'production' : 'development',
	entry: ['@babel/polyfill', './index.ts'],
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	target: "web",
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, './dist'),
		open: true,
		compress: true,
		hot: true,
		port: 8080,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	optimization: {
		splitChunks: {
			chunks: "all"
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				include: path.resolve(__dirname, './node_modules/bootstrap-icons/font/fonts'),
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'webfonts',
						publicPath: '../webfonts',
					},
				}
			},
			{
				test: /\.css$/i,
				use: [
					miniCss.loader,
					'style-loader',
					'css-loader'
				],
			},
			{
				test:/\.(s*)css$/,
				use: [
					miniCss.loader,
					'css-loader',
					'sass-loader',
				]
			},
			{ test: /\.css$/i,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							'@babel/preset-env',
						]
					}
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new miniCss({
			filename: '[name].[contenthash].css',
		}),
		new HtmlWebpackPlugin({
			template: './index.html',
			minify: {
				collapseWhitespace: isProd
			}
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
					patterns: [
						{
							from: path.resolve(__dirname, 'src/image/favicon.ico'),
							to: path.resolve(__dirname, 'dist/image/favicon.ico')
						}
					]
				})
	]
}
