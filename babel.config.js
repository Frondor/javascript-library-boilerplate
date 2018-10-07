const isTest = process.env.NODE_ENV === "test";

const presetEnvOptions = {
  debug: !isTest,
  // NOT RECOMMENDED FOR LIBRARIES:
  // for injecting polyfills change to "usage" and run "npm i -D core-js"
  useBuiltIns: false,
  targets: {
    browsers: ["> 0.25%", "last 2 versions", "not ie < 11"]
  }
};

if (!isTest) presetEnvOptions.module = false;

module.exports = function(api) {
  api.cache(true);
  const presets = [];
  presets.push(["@babel/preset-env", presetEnvOptions]);

  return { presets };
};
