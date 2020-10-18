const path = require("path")

module.exports = {
    mode: "production",
    // mode: "development",
    entry: "./vmsg.simplify.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "vmsg.min.js",
        library: "mp3Recorder",
        libraryTarget: "umd",
        libraryExport: "default",
    },
    // module: {
    //     rules: [
    //         {
    //             test: /.ts$/,
    //             use: ["babel-loader", "ts-loader"],
    //             exclude: [path.resolve(__dirname, "node_modules")]
    //         }
    //     ]
    // },
    // resolve: {
    //     extensions: [".ts", ".js"]
    // }
    // devtool: "inline-source-map"
}
