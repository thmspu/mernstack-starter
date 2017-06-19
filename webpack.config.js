/**
 * Created by Dejun on 2/19/2016.
 */
module.exports = {
    entry:"./js/App.js",
    output:{
        path:__dirname + "/static",
        filename:"bundle.js"
    },
    watch:true,
    devtool:"eval-source-map",
    module:{
        loaders:[{
                test: /\.(js|jsx)$/,
                loaders:['babel'],
                exclude:[/node_modules/]
            },
            {
            test: /\.css$/,
            loaders: [ 'style-loader', 'css-loader' ]
        }]
    }
};