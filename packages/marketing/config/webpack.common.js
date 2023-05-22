module.exports = {
	module: {
		rules: [
			{
				// loaders
				// cuando se importe un archivo que sea .mjs o .js, que lo procese Babel
				test: /\.m?js$/,
				// que Babel ignore todo lo de node_modules
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'],
					}
				}
			}
		]
	}
}