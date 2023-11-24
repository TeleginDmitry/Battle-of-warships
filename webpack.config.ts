import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

interface EnvVariables {
    mode?: 'production' | 'development'
}

export default (env: EnvVariables) => {
    const config: webpack.Configuration = {
        entry: './src/script.ts',
        mode: env.mode ?? 'development',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'public/index.html'
            })
        ]
    }

    return config
}
