'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const md5 = require('md5-file').sync

const ES6_NODE_MODULES = [
  'rambda',
  'rambdax',
]

const projectDir = path.resolve(__dirname, '..')
const srcDir = path.resolve(projectDir, 'src')
const appDir = path.resolve(srcDir, 'app')
const staticDir = path.resolve(srcDir, 'static')
const staticImgDir = path.resolve(staticDir, 'img')
const staticCursorsDir = path.resolve(staticDir, 'cursor')
const distDir = path.resolve(projectDir, 'dist')
const svgDir = path.resolve(projectDir, 'svg')
const playingCardsImgDir = path.join(staticImgDir, 'playing-cards')

const outputImgPath = path.join('static', 'img')
const outputCursorsPath = path.join('static', 'cursor')
const playingCardsPngHash = md5(path.join(playingCardsImgDir, 'playing-cards.png')).substring(0, 4)

const plugins = [
  new HtmlWebpackPlugin({
    cache: false,
    filename: './index.html',
    minify: {
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
    },
    template: 'index.html',
  }),
  new FaviconsWebpackPlugin({
    icons: {
      android: false,
      appleIcon: false,
      appleStartup: false,
      coast: false,
      favicons: true,
      firefox: false,
      opengraph: false,
      twitter: false,
      yandex: false,
      windows: false,
    },
    logo: path.join(svgDir, 'favicon.svg'),
    prefix: 'static/icons-[hash:4]/',
  }),
]

module.exports = ({prod = false, analyzer} = {}) => {
  if (analyzer) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    plugins.push(new BundleAnalyzerPlugin())
  }

  return {
    context: srcDir,
    entry: {
      app: './index',
    },
    output: {
      filename: '[name].js',
      path: distDir,
      publicPath: '/',
    },
    resolve: {
      alias: {
        app: appDir,
        static: staticDir,
        react: 'preact-compat',
        'react-dom': 'preact-compat',
      },
      extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            priority: -10,
            test: /[\\/]node_modules[\\/]/,
          },
          default: {
            priority: -20,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader',
          options: {
            babelCore: '@babel/core',
            errorsAsWarnings: !prod,
            useBabel: true,
          },
        },
        {
          test: /\.svg$/,
          include: path.join(staticImgDir, 'sprites'),
          loader: 'svg-sprite-loader',
        },
        {
          test: /\.svg$/,
          include: path.join(staticImgDir, 'loading'),
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: outputImgPath,
              },
            },
            {
              loader: 'image-webpack-loader',
              options: {
                svgo: {
                  enabled: true,
                },
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          include: playingCardsImgDir,
          use: [
            'svg-react-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                svgo: {
                  enabled: true,
                  plugins: [
                    {convertShapeToPath: false},
                    {inlineStyles: false},
                    {removeTitle: false},
                  ],
                },
              },
            },
            {
              loader: 'webpack-replace-loader',
              options: {
                attr: 'g',
                search: '__PLAYING_CARDS_PNG_HASH__',
                replace: playingCardsPngHash,
              },
            },
          ],
        },
        {
          test: /\.png$/,
          include: staticCursorsDir,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            name: '[name].[hash:4].[ext]',
            outputPath: outputCursorsPath,
          },
        },
        {
          test: /\.png$/,
          include: staticImgDir,
          exclude: /node_modules/,
          use: [
            {
              loader: 'responsive-loader',
              options: {
                name: '[name]-[width].[ext]',
                outputPath: outputImgPath,
                sizes: [
                  600,
                  800,
                  1200,
                ],
              },
            },
          ],
        },
        {
          test: /\.js$/,
          include: ES6_NODE_MODULES.forEach(x => path.resolve(projectDir, `node_modules/${x}`)),
          loader: 'babel-loader',
          options: {
            babelrc: false,
            extends: path.join(projectDir, '.babelrc'),
          },
        },
      ],
    },
    plugins,
    stats: {
      warningsFilter: /\/mobx-react\//,
    },
  }
}
