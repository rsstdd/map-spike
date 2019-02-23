// eslint-disable-next-line
exports.onCreateWebpackConfig = ({ actions, getConfig, loaders, rules, stage, store }) => {
  const program = store.getState().program;
  const { directory, browserslist } = program;

  let postCssPlugins = [
    require(`postcss-mq-optimize`)(),
    require(`postcss-pxtorem`)(),
    require(`autoprefixer`)({
      browsers: browserslist,
      flexbox: `no-2009`,
    }),
  ];

  const postcssRules = rules.postcss({ plugins: postCssPlugins });

  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules\/(?!(jest-worker)\/).*/,
          },
        ],
      },
    });
  }

  actions.setWebpackConfig({
    module: {
      rules: [postcssRules],
    },
  });
};
