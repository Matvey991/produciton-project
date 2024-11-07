import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack  from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtraPlugin from 'mini-css-extract-plugin'


export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {


    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtraPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]
}