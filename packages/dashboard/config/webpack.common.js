const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].[contenthash].js',
	},
	resolve: {
		extensions: ['.js', '.vue'],
	},
	module: {
		rules: [
			{
		
				test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
				use: [
					{ loader: 'file-loader' }
				]
			},
			{
				test: /\.vue$/,
				use: 'vue-loader',
			},
			{
				test: /\.scss|\.css$/,
				use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']
			},
			{
				// loaders
				// cuando se importe un archivo que sea .mjs o .js, que lo procese Babel
				test: /\.m?js$/,
				// que Babel ignore todo lo de node_modules
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'],
					}
				}
			}
		]
	},
	plugins: [new VueLoaderPlugin()],
}