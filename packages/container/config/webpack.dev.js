// funcion que permite mergear 2 objetos de config de webpack
// en este caso common con dev o prod
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
// puedo acceder al contenido de package.json, lo voy a usar para no tener que actualizar 'shared' a mano
const packageJson = require('../package.json');

const devConfig = {
	mode: 'development',
	output: {
		publicPath: 'http://localhost:8080/'
	},
	devServer: {
		port: 8080,
		historyApiFallback: {
			index: '/index.html'
		}
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'container', // optional
			remotes: {
				marketing: 'marketing@http://localhost:8081/remoteEntry.js',
				auth: 'auth@http://localhost:8082/remoteEntry.js',
				dashboard: 'dashboard@http://localhost:8083/remoteEntry.js',
			},
			shared: packageJson.dependencies,
		}),
	]
};

// el segundo parametro es el que va a overridear al primero -> tiene prioridad
module.exports = merge(commonConfig, devConfig);