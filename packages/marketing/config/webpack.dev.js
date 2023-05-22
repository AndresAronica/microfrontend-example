// funcion que permite mergear 2 objetos de config de webpack
// en este caso common con dev o prod
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
	mode: 'development',
	devServer: {
		port: 8081,
		historyApiFallback: {
			index: '/index.html'
		}
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'marketing',
			filename: 'remoteEntry.js',
			exposes: {
				'./MarketingApp': './src/bootstrap'
			},
			shared: packageJson.dependencies,
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
	]
};

// el segundo parametro es el que va a overridear al primero -> tiene prioridad
module.exports = merge(commonConfig, devConfig);