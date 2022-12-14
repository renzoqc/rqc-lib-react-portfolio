const path = require("path");

module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: ["../src/**/*.stories.@(tsx|mdx)","../docs/*.stories.mdx"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
        plugins: ["react-require"]
      }
    });

    config.resolve.extensions.push(".ts", ".tsx",".mdx");

    return config;
  }
};