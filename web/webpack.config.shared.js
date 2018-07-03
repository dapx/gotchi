const path = require('path');
const appDirectory = path.resolve(__dirname, '../');

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
  test: /\.(jsx?|tsx?)$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, 'index.web.js'),
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, 'node_modules/react-native-web'),
    path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
    path.resolve(appDirectory, 'node_modules/react-native-progress'),
    path.resolve(appDirectory, 'node_modules/react-navigation'),
    path.resolve(appDirectory, 'node_modules/react-native-tab-view'),
    path.resolve(appDirectory, 'node_modules/react-native-safe-area-view'),
    path.resolve(appDirectory, 'node_modules/native-base'),
    path.resolve(appDirectory, 'node_modules/native-base-shoutem-theme'),
    path.resolve(appDirectory, 'node_modules/react-native-keyboard-aware-scroll-view'),
    path.resolve(appDirectory, 'node_modules/react-native-easy-grid'),
    path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
    path.resolve(appDirectory, 'node_modules/react-native-drawer'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // The 'react-native' preset is recommended to match React Native's packager
      presets: ['react-native'],
      // Re-write paths to import only the modules needed by the app
      plugins: ['react-native-web']
    }
  }
};

const cssLoader = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg|ico)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]'
    }
  }
};

const typescriptConfiguration = {
  test: /\.tsx?$/,
  use: {
    loader: "awesome-typescript-loader",
    options: {
      name: '[name].[ext]',
    }
  }
 };

const sourceMapConfiguration = {
  enforce: "pre",
  test: /\.js$/,
  loader: "source-map-loader"
};

module.exports = {
  module: {
    rules: [
      babelLoaderConfiguration,
      cssLoader,
      imageLoaderConfiguration,
      typescriptConfiguration,
      sourceMapConfiguration
    ],
  },
  entry: [
    // load any web API polyfills
    // It's necessary for react-navigation
    path.resolve(appDirectory, 'web/polyfills-web.js'),
    // your web-specific entry file
    path.resolve(appDirectory, 'index.web.js')
  ],
  // configures where the build ends up
  output: {
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'dist')
  },
  resolve: {
    // This will only alias the exact import "react-native"
    alias: {
      'react-native$': 'react-native-web',
      // Support React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
      'react-native/Libraries/Renderer/shims/ReactNativePropRegistry': 'react-native-web/src/modules/ReactNativePropRegistry',
    },
    // To have a better performance, if we don't use npm link or yarn link.
    symlinks: false,
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: [ '.web.js', '.web.jsx', '.web.ts', '.web.tsx', '.js', '.jsx', '.ts', '.tsx' ]
  },
};
