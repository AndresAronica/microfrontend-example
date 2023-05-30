const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN; // definida por nosotros esa variable de entorno

const prodConfig = {
	mode: 'production',
	output: {
		// template para nombrar los archivos que van a prod
		filename: '[name].[contenthash].js',
		publicPath: '/container/latest/'
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`, // la estructura esta definida por nosotros
				auth: `auth@${domain}/auth/latest/remoteEntry.js`,
			},
			shared: packageJson.dependencies,
		})
	]
};

// mergea los 2
module.exports = merge(commonConfig, prodConfig);