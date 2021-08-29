const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',
    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                /*use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true}
                    }
                ]*/
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPack({
            template: './src/index.html',
            filename: './index.html'
        }),

        new MiniCssExtract({
            // full hash -> evita que se almacene en caché en los navegadores de los clientes
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),

        // new CopyPlugin({
        //     patterns: [
        //         {from: 'src/assets/', to: 'assets/'}
        //     ]
        // })
    ]
}