/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { resolve, join } from 'path';
import { Configuration } from 'webpack';
import { yamlParse } from 'yaml-cfn';
import {readFileSync} from 'fs';
import TerserPlugin from 'terser-webpack-plugin';

const template: any = yamlParse(readFileSync(resolve(__dirname, 'template.yml')).toString());

const entries = getEntries(template);

const config: Configuration = {
    entry: entries,
    // AWS includes the `aws-sdk` in the lambda environment
    // so we don't need to bundle that code. It makes the resulting bundle
    // about 90% smaller
    externals: [{ 'aws-sdk': 'aws-sdk'}],
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs2',
        path: resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    target: 'node',
    devtool: 'inline-source-map',
    mode: process.env.NODE_ENV?.toLowerCase().includes('dev') ? 'development' : 'production',
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_fnames: true
                }
            })
        ]
    },
}

export default config;


function getEntries(template: any) {
    const entries = {};
    Object.keys(template.Resources).forEach(resourceName => {
        const resource = template.Resources[resourceName];
        // Look for a function
        if (resource.Type !== 'AWS::Serverless::Function') {
            return;
        }

        const codeUri = resource.Properties.CodeUri.split('/').splice(1).join('/');
        const handlerFileName = resource.Properties.Handler.split('.')[0];

        const entryName = join(codeUri, handlerFileName)
        const entryPoint = resolve('./src', codeUri, `${handlerFileName}.ts`)

        // @ts-ignore
        entries[entryName] = entryPoint;
    })

    return entries;
}
