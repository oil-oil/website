const { nextI18NextRewrites } = require("next-i18next/rewrites");
const fs = require('fs')

const localeSubpaths = {
  "zh-CN": "zh",
  "en-US": "en",
};

let leanCloudConfig;
try {
  leanCloudConfig = JSON.parse(fs.readFileSync('../leanCloudKey.json', 'utf8'));
} catch (err) {
  leanCloudConfig = {
    appId: "",
    appKey: "",
    serverURL: ""
  };
};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
    leanCloudConfig,
  },
  webpack: function (config) {
    config.node = {
      fs: 'empty'
    }

    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/careers/technical-support-engineer',
        destination: '/careers/site-reliability-engineer',
        permanent: true,
      },
    ]
  },
};
