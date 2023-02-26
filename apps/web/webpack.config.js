const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Prioritize files with '.web' extensions when names are identical.
  config.resolve.extensions.unshift(
    '.web.ts',
    '.web.tsx',
    '.web.js',
    '.web.jsx'
  );

  // Alias react-native dependencies for react-native-web
  if (!('alias' in config.resolve)) {
    config.resolve.alias = {};
  }
  config.resolve.alias['react-native$'] = 'react-native-web';

  // Ignore source maps for react navigation, which point to incorrect
  // paths at the moment, producing excessive warnings inside the console.
  config.module.rules = config.module.rules.map((rule) =>
    isSourceMapLoaderRule(rule)
      ? excludeReactNavigationModuleFromRule(rule)
      : rule
  );

  return config;
});

const excludeReactNavigationModuleFromRule = (rule) => ({
  ...rule,
  exclude: /node_modules\/(@react-navigation|@dank-style)/,
});

const isSourceMapLoaderRule = (rule) =>
  rule.loader === require.resolve('source-map-loader');
